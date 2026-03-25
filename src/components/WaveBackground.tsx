import { useEffect, useRef } from 'react';

// Recursive lightning bolt generator
interface Bolt {
    x1: number; y1: number;
    x2: number; y2: number;
    alpha: number;
    children: Bolt[];
    width: number;
}

function generateBolt(
    x1: number, y1: number,
    x2: number, y2: number,
    depth: number,
    width: number
): Bolt {
    const bolt: Bolt = { x1, y1, x2, y2, alpha: 1, children: [], width };
    if (depth <= 0) return bolt;

    const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * (Math.abs(x2 - x1) * 0.6 + Math.abs(y2 - y1) * 0.3);
    const my = (y1 + y2) / 2 + (Math.random() - 0.5) * 20;

    bolt.children.push(generateBolt(x1, y1, mx, my, depth - 1, width * 0.75));
    bolt.children.push(generateBolt(mx, my, x2, y2, depth - 1, width * 0.75));

    // Random branch
    if (depth > 1 && Math.random() < 0.45) {
        const bx = mx + (Math.random() - 0.5) * 120;
        const by = my + Math.random() * 80 + 40;
        bolt.children.push(generateBolt(mx, my, bx, by, depth - 2, width * 0.4));
    }

    return bolt;
}

function drawBolt(ctx: CanvasRenderingContext2D, bolt: Bolt, alpha: number, color: string) {
    ctx.beginPath();
    ctx.moveTo(bolt.x1, bolt.y1);
    ctx.lineTo(bolt.x2, bolt.y2);
    ctx.strokeStyle = color.replace('A', String(Math.min(alpha * bolt.alpha, 1)));
    ctx.lineWidth = bolt.width;
    ctx.stroke();
    bolt.children.forEach(child => drawBolt(ctx, child, alpha * 0.85, color));
}

interface Strike {
    bolt: Bolt;
    alpha: number;         // current opacity
    phase: 'flash' | 'fade';
    flashTimer: number;    // how long the bright flash lasts
    glowColor: string;
    coreColor: string;
}

export const WaveBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animFrame: number;
        const strikes: Strike[] = [];
        let nextStrikeIn = 0; // frames until next strike
        let frame = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const spawnStrike = () => {
            const w = canvas.width;
            const h = canvas.height;

            // Start from a random point near the top third
            const startX = Math.random() * w;
            const startY = Math.random() * h * 0.25;
            const endX = startX + (Math.random() - 0.5) * w * 0.4;
            const endY = startY + h * (0.35 + Math.random() * 0.35);

            // Alternate between purple and blue-teal tones
            const isPurple = Math.random() > 0.5;
            const glowColor = isPurple
                ? 'rgba(160,80,255,A)'
                : 'rgba(60,140,255,A)';
            const coreColor = isPurple
                ? 'rgba(230,200,255,A)'
                : 'rgba(200,230,255,A)';

            strikes.push({
                bolt: generateBolt(startX, startY, endX, endY, 5, 1.5),
                alpha: 0,
                phase: 'flash',
                flashTimer: 0,
                glowColor,
                coreColor,
            });
        };

        const animate = () => {
            const w = canvas.width;
            const h = canvas.height;

            // Clear with a very dark near-black background
            ctx.fillStyle = '#08081a';
            ctx.fillRect(0, 0, w, h);

            // Subtle ambient gradient (barely visible, just a hint of color)
            const ambient = ctx.createRadialGradient(w * 0.5, h * 0.6, 0, w * 0.5, h * 0.6, w * 0.7);
            ambient.addColorStop(0, 'rgba(60,20,100,0.12)');
            ambient.addColorStop(1, 'rgba(8,8,26,0)');
            ctx.fillStyle = ambient;
            ctx.fillRect(0, 0, w, h);

            // Spawn new strikes
            if (frame >= nextStrikeIn) {
                spawnStrike();
                // Occasional double or triple strike
                if (Math.random() < 0.5) spawnStrike();
                if (Math.random() < 0.2) spawnStrike();
                nextStrikeIn = frame + 20 + Math.floor(Math.random() * 20); // ~0.3–0.7s at 60fps
            }

            // Draw and update each strike
            for (let i = strikes.length - 1; i >= 0; i--) {
                const s = strikes[i];

                if (s.phase === 'flash') {
                    // Quick ramp up
                    s.alpha = Math.min(s.alpha + 0.18, 1);
                    s.flashTimer++;

                    // Glow layer (wide, low opacity)
                    ctx.shadowColor = s.glowColor.replace('A', '0.5');
                    ctx.shadowBlur = 18;
                    drawBolt(ctx, s.bolt, s.alpha * 0.25, s.glowColor);

                    // Core layer (bright, thin)
                    ctx.shadowBlur = 6;
                    drawBolt(ctx, s.bolt, s.alpha * 0.85, s.coreColor);
                    ctx.shadowBlur = 0;

                    // Hold for ~8 frames then fade
                    if (s.flashTimer > 8) s.phase = 'fade';
                } else {
                    // Slow fade out
                    s.alpha -= 0.013;

                    ctx.shadowColor = s.glowColor.replace('A', String(s.alpha * 0.3));
                    ctx.shadowBlur = 12;
                    drawBolt(ctx, s.bolt, s.alpha * 0.2, s.glowColor);

                    ctx.shadowBlur = 4;
                    drawBolt(ctx, s.bolt, s.alpha * 0.7, s.coreColor);
                    ctx.shadowBlur = 0;

                    if (s.alpha <= 0) strikes.splice(i, 1);
                }
            }

            frame++;
            animFrame = requestAnimationFrame(animate);
        };

        animFrame = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrame);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-20 pointer-events-none"
            aria-hidden="true"
        />
    );
};
