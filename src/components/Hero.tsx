import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/20 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-orange/10 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative max-w-7xl mx-auto border-2 border-white/5 rounded-[3rem] p-8 md:p-16 lg:p-20 glass"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8"
                            >
                                <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                                <span className="text-[10px] uppercase tracking-widest font-bold text-muted">
                                    Available for new projects
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black leading-tight mb-12">
                                <div className="overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                                        className="inline-block"
                                    >
                                        JEUZ VINCI BAS
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden h-[1.1em]">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                                        className="text-gradient-orange-purple inline-block"
                                    >
                                        DIGITAL
                                    </motion.span>
                                </div>
                                <div className="overflow-hidden h-[1.1em]">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
                                        className="text-gradient-purple-blue inline-block"
                                    >
                                        PORTFOLIO
                                    </motion.span>
                                </div>
                            </h1>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4"
                            >
                                <a
                                    href="#projects"
                                    className="group px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-accent-orange hover:text-white transition-all duration-300"
                                >
                                    See My Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-4 rounded-full border border-white/10 hover:border-accent-orange/50 transition-colors font-bold"
                                >
                                    Contact Me
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            <div className="relative w-full max-w-sm">
                                {/* Background Shapes */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-accent-purple/20 rounded-3xl blur-2xl animate-pulse" />

                                {/* Image Container */}
                                <div className="relative h-full w-full rounded-2xl overflow-hidden glass border border-white/10 group">
                                    <img
                                        src="/profile.png"
                                        alt="Jeuz Vinci Bas"
                                        className="w-full h-full object-contain group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-20 left-20 hidden lg:block"
            >
                <div className="w-24 h-24 rounded-2xl border-2 border-accent-orange/30 rotate-12 glass shadow-2xl shadow-accent-orange/10" />
            </motion.div>

            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-40 right-20 hidden lg:block"
            >
                <div className="w-32 h-32 rounded-full border-2 border-accent-purple/30 glass shadow-2xl shadow-accent-purple/10" />
            </motion.div>
        </section>
    );
};
