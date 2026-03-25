import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Briefcase } from 'lucide-react';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    summary: string;
    highlights: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: 'Lifewood Data Technology',
        role: 'AI Executive / Project Support',
        period: 'Apr 2025 — Present',
        summary: 'Leading AI-assisted full-stack development, automation workflows, and data visualization projects.',
        highlights: [
            'Spearheaded AI-assisted full-stack application development integrating automation, data processing, and user-focused features',
            'Built and maintained systems with database integration (Supabase, Firebase), backend structuring (Spring Boot), and API integrations',
            'Deployed web applications via Vercel and managed domains through GoDaddy',
            'Designed data visualization tools using Power BI and custom web apps',
            'Performed data quality checks and validation to ensure accuracy of outputs from outsourced employees',
            'Assisted in creating automation workflows and AI-assisted solutions using LLMs, prompt engineering (PRM/PRMACE), and RAG-based approaches',
            'Produced AI-generated content (AIGC) including images, videos, and avatars using generative AI tools (e.g., HeyGen, Higgsfield)',
            'Collaborated with teams and supported project coordination to deliver reliable, data-driven, and AI-enhanced solutions',
        ],
    },
    {
        company: 'Lifewood Data Technology',
        role: 'Intern',
        period: 'Jan 2025 — Apr 2025',
        summary: 'Performed data quality checks and gained hands-on experience with AI-assisted tools.',
        highlights: [
            'Performed quality checks on data for internal and client projects',
            'Gained hands-on experience with AI-assisted tools and data-driven solutions, contributing to project insights and process improvements',
        ],
    },
    {
        company: 'Amazon',
        role: 'Customer Service Associate',
        period: 'Sep 2022 — Dec 2022',
        summary: 'Handled customer inquiries and supported team operations during peak seasons.',
        highlights: [
            'Handled customer inquiries and provided support via calls, resolving issues efficiently while maintaining professionalism and ensuring high customer satisfaction',
            'Managed complex inquiries, delivering accurate solutions and assisting customers with detailed guidance as needed',
            'Supported team operations during peak seasons and high-volume periods, contributing to smooth workflow and overall team performance',
        ],
    },
    {
        company: 'Concentrix',
        role: 'Technical Advisor',
        period: 'Oct 2020 — Nov 2021',
        summary: 'Provided technical support for cable, internet, and voice services.',
        highlights: [
            'Provided technical support for cable, internet, and voice services, guiding customers through troubleshooting steps and resolving service-related issues efficiently',
            'Escalated complex cases when necessary to ensure timely resolution and maintain high customer satisfaction',
            'Utilized support tools and systems to enhance the customer experience and improve overall service quality',
        ],
    },
];

export const Experience = () => {
    const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-12 border-b border-white/10 pb-6"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        WORK <span className="text-accent-purple">EXPERIENCE</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-white/10" />

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={`${exp.company}-${exp.role}`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12 group cursor-pointer"
                                onClick={() => setSelectedExp(exp)}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-4 top-6 w-2 h-2 -translate-x-[3.5px] rounded-full bg-accent-purple group-hover:scale-150 transition-transform" />

                                <div className="p-5 md:p-6 rounded-2xl glass border border-white/5 hover:border-accent-purple/20 transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                                        <div>
                                            <h3 className="text-base md:text-lg font-black group-hover:text-accent-purple transition-colors">{exp.company}</h3>
                                            <p className="text-sm font-bold text-white/60">{exp.role}</p>
                                        </div>
                                        <span className="text-xs font-bold text-accent-purple font-mono tracking-wide shrink-0">{exp.period}</span>
                                    </div>
                                    <p className="text-xs text-muted leading-relaxed">{exp.summary}</p>
                                    <span className="text-[10px] text-accent-purple/60 font-bold uppercase tracking-widest mt-2 block">Click for details →</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* EXPERIENCE MODAL */}
            <AnimatePresence>
                {selectedExp && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        onClick={() => setSelectedExp(null)}
                    >
                        {/* Backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-h-[80vh] overflow-y-auto"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedExp(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <X size={18} className="text-white" />
                            </button>

                            {/* Header */}
                            <div className="p-8 pb-4 border-b border-white/5">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2.5 rounded-xl bg-accent-purple/10 border border-accent-purple/20">
                                        <Briefcase size={20} className="text-accent-purple" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-accent-purple">{selectedExp.company}</h3>
                                        <p className="text-sm font-bold text-white/60">{selectedExp.role}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-bold text-accent-purple font-mono tracking-wide">{selectedExp.period}</span>
                            </div>

                            {/* Highlights */}
                            <div className="p-8">
                                <h4 className="text-xs font-bold text-muted uppercase tracking-widest mb-4">Key Responsibilities</h4>
                                <ul className="space-y-3">
                                    {selectedExp.highlights.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="text-sm text-white/70 leading-relaxed flex gap-3"
                                        >
                                            <span className="text-accent-purple mt-0.5 shrink-0">•</span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

