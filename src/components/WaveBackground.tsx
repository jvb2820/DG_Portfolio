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
        let lastTime = 0;
        const strikes: Strike[] = [];
        let nextStrikeIn = 0;
        let frame = 0;

        let cachedGradient: CanvasGradient | null = null;
        let lastWidth = 0;
        let lastHeight = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            cachedGradient = null;
            lastWidth = canvas.width;
            lastHeight = canvas.height;
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

        const animate = (time: number) => {
            // Throttle to ~30fps
            if (time - lastTime < 33) {
                animFrame = requestAnimationFrame(animate);
                return;
            }
            lastTime = time;

            const w = canvas.width;
            const h = canvas.height;

            // Clear with a very dark near-black background
            ctx.fillStyle = '#08081a';
            ctx.fillRect(0, 0, w, h);

            // Cache gradient - only recreate on resize
            if (!cachedGradient || w !== lastWidth || h !== lastHeight) {
                cachedGradient = ctx.createRadialGradient(w * 0.5, h * 0.6, 0, w * 0.5, h * 0.6, w * 0.7);
                cachedGradient.addColorStop(0, 'rgba(60,20,100,0.12)');
                cachedGradient.addColorStop(1, 'rgba(8,8,26,0)');
            }
            ctx.fillStyle = cachedGradient;
            ctx.fillRect(0, 0, w, h);

            // Spawn new strikes (less frequent)
            if (frame >= nextStrikeIn) {
                spawnStrike();
                if (Math.random() < 0.3) spawnStrike(); // Reduced from 0.5
                nextStrikeIn = frame + 30 + Math.floor(Math.random() * 30); // Reduced frequency
            }

            // Draw and update each strike
            for (let i = strikes.length - 1; i >= 0; i--) {
                const s = strikes[i];

                if (s.phase === 'flash') {
                    s.alpha = Math.min(s.alpha + 0.18, 1);
                    s.flashTimer++;

                    // Glow layer (optimized)
                    ctx.shadowColor = s.glowColor.replace('A', '0.5');
                    ctx.shadowBlur = 15; // Reduced from 18
                    drawBolt(ctx, s.bolt, s.alpha * 0.25, s.glowColor);

                    // Core layer
                    ctx.shadowBlur = 4; // Reduced from 6
                    drawBolt(ctx, s.bolt, s.alpha * 0.85, s.coreColor);
                    ctx.shadowBlur = 0;

                    if (s.flashTimer > 8) s.phase = 'fade';
                } else {
                    s.alpha -= 0.013;

                    ctx.shadowColor = s.glowColor.replace('A', String(s.alpha * 0.3));
                    ctx.shadowBlur = 10; // Reduced from 12
                    drawBolt(ctx, s.bolt, s.alpha * 0.2, s.glowColor);

                    ctx.shadowBlur = 3; // Reduced from 4
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
            className="fixed inset-0 w-full h-full -z-20 pointer-events-none will-change-transform"
            aria-hidden="true"
        />
    );
};
