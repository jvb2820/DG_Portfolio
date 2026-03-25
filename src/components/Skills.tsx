import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const skillCategories = [
    {
        title: 'Programming Languages',
        emoji: '🧠',
        gradient: 'from-orange-500 via-amber-400 to-yellow-500',
        glow: 'rgba(255,77,0,0.15)',
        items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C'],
    },
    {
        title: 'Frontend Development',
        emoji: '🎨',
        gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
        glow: 'rgba(178,75,243,0.15)',
        items: ['React (Vite)', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
        title: 'Backend Development',
        emoji: '⚙️',
        gradient: 'from-emerald-400 via-green-500 to-teal-500',
        glow: 'rgba(52,211,153,0.15)',
        items: ['Spring Boot (Java)', 'REST API Development'],
    },
    {
        title: 'Databases & Backend Services',
        emoji: '🗄️',
        gradient: 'from-cyan-400 via-blue-500 to-indigo-500',
        glow: 'rgba(59,130,246,0.15)',
        items: ['Firebase', 'Supabase', 'MySQL'],
    },
    {
        title: 'Deployment & Dev Tools',
        emoji: '☁️',
        gradient: 'from-sky-400 via-blue-400 to-violet-500',
        glow: 'rgba(56,189,248,0.15)',
        items: ['Vercel', 'GoDaddy', 'Git / GitHub'],
    },
    {
        title: 'LLMs & AI Development',
        emoji: '🤖',
        gradient: 'from-accent-orange via-red-500 to-accent-purple',
        glow: 'rgba(255,77,0,0.2)',
        items: [
            'ChatGPT / GPT (OpenAI)',
            'Claude AI',
            'Google AI Studio',
            'Google Colab',
            'Cursor',
            'VS Code (Copilot)',
            'Anti Gravity',
            'OpenCode',
        ],
    },
    {
        title: 'AI Automation & Workflows',
        emoji: '🔗',
        gradient: 'from-rose-500 via-orange-500 to-amber-500',
        glow: 'rgba(244,63,94,0.15)',
        items: [
            'n8n (Workflow Automation)',
            'LLM Integration & Automation',
        ],
    },
    {
        title: 'Generative AI & Content',
        emoji: '✨',
        gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
        glow: 'rgba(139,92,246,0.15)',
        items: [
            'HeyGen',
            'Higgsfield',
            'Sora',
            'Flow',
            'AI Content Creation',
        ],
    },
    {
        title: 'Data & Visualization',
        emoji: '📊',
        gradient: 'from-teal-400 via-emerald-500 to-green-500',
        glow: 'rgba(20,184,166,0.15)',
        items: ['Power BI', 'Microsoft Excel', 'MindManager'],
    },
];

/* Floating orb background element */
const FloatingOrb = ({ delay, x, y, size, color }: {
    delay: number; x: string; y: string; size: number; color: string;
}) => (
    <motion.div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
            left: x,
            top: y,
            width: size,
            height: size,
            background: color,
        }}
        animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, -10, 5, 0],
            scale: [1, 1.2, 0.9, 1.1, 1],
            opacity: [0.3, 0.5, 0.25, 0.45, 0.3],
        }}
        transition={{
            duration: 8,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
        }}
    />
);

/* Animated counter for the header */
const AnimatedCount = ({ target }: { target: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const controls = animate(count, target, {
            duration: 2,
            ease: 'easeOut',
        });
        const unsub = rounded.on('change', (v) => setDisplay(v));
        return () => { controls.stop(); unsub(); };
    }, [count, rounded, target]);

    return <span>{display}+</span>;
};

/* Single skill card */
const SkillCard = ({
    category,
    index,
}: {
    category: (typeof skillCategories)[0];
    index: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: [0.215, 0.61, 0.355, 1],
            }}
            whileHover={{
                y: -6,
                scale: 1.03,
                transition: { duration: 0.25 },
            }}
            className="group relative rounded-xl overflow-hidden"
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-xl p-[1px] overflow-hidden">
                <motion.div
                    className={`absolute inset-[-100%] bg-gradient-to-r ${category.gradient}`}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{ opacity: 0.15 }}
                />
            </div>

            {/* Card content */}
            <div
                className="relative rounded-xl bg-[#1a1a22]/90 backdrop-blur-xl p-5
                           border border-white/[0.04] transition-all duration-500
                           group-hover:border-white/[0.08]"
                style={{
                    boxShadow: `0 0 0px ${category.glow}`,
                    transition: 'box-shadow 0.4s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 30px ${category.glow}, 0 0 60px ${category.glow}`;
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0px ${category.glow}`;
                }}
            >
                {/* Top gradient bar with shimmer */}
                <div className="absolute top-0 left-0 right-0 h-[2px] overflow-hidden">
                    <motion.div
                        className={`h-full w-[200%] bg-gradient-to-r ${category.gradient} ${category.gradient}`}
                        animate={{ x: ['-50%', '0%'] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </div>

                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-3">
                    <motion.span
                        className="text-base"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                            duration: 2,
                            delay: index * 0.3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        {category.emoji}
                    </motion.span>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wide
                                   text-white/80 group-hover:text-white transition-colors leading-tight">
                        {category.title}
                    </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                    {category.items.map((item, i) => (
                        <motion.span
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.07 + i * 0.04,
                            }}
                            whileHover={{
                                scale: 1.1,
                                y: -2,
                                transition: { duration: 0.15 },
                            }}
                            className="px-2.5 py-1 text-[11px] sm:text-xs font-semibold
                                       rounded-md bg-white/[0.04] text-white/50
                                       group-hover:bg-white/[0.08] group-hover:text-white/80
                                       hover:!bg-white/[0.15] hover:!text-white
                                       transition-all duration-300 cursor-default leading-tight
                                       border border-transparent hover:border-white/10"
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const Skills = () => {
    const totalSkills = skillCategories.reduce((sum, c) => sum + c.items.length, 0);

    return (
        <section id="skills" className="py-20 bg-background relative overflow-hidden">
            {/* Floating background orbs */}
            <FloatingOrb delay={0} x="5%" y="10%" size={200} color="rgba(255,77,0,0.08)" />
            <FloatingOrb delay={2} x="80%" y="20%" size={250} color="rgba(178,75,243,0.06)" />
            <FloatingOrb delay={4} x="50%" y="60%" size={180} color="rgba(59,130,246,0.06)" />
            <FloatingOrb delay={1} x="20%" y="80%" size={220} color="rgba(52,211,153,0.05)" />
            <FloatingOrb delay={3} x="70%" y="75%" size={160} color="rgba(244,63,94,0.06)" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-black mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        💻 TECH <span className="text-gradient">STACK</span>
                    </motion.h2>
                    <p className="text-muted text-base max-w-xl mx-auto mb-5">
                        Technologies, tools, and platforms I use to build, automate, and create.
                    </p>

                    {/* Animated stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="inline-flex gap-6 text-xs font-bold uppercase tracking-widest text-muted"
                    >
                        <span>
                            <span className="text-accent-orange text-sm">
                                <AnimatedCount target={totalSkills} />
                            </span>{' '}
                            Tools
                        </span>
                        <span className="text-white/10">|</span>
                        <span>
                            <span className="text-accent-purple text-sm">
                                <AnimatedCount target={skillCategories.length} />
                            </span>{' '}
                            Categories
                        </span>
                    </motion.div>
                </motion.div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                    {skillCategories.map((category, index) => (
                        <SkillCard
                            key={category.title}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
