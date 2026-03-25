import { motion } from 'framer-motion';
import { GraduationCap, FileText } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8">
                            ABOUT <span className="text-accent-orange">ME</span>
                        </h2>
                        <div className="space-y-6 text-muted text-lg leading-relaxed">
                            {[
                                `I am an IT professional and aspiring AI developer with a strong foundation in 
                                full-stack development, data analytics, and data visualization. I specialize in 
                                building AI-assisted applications, combining modern technologies with automation 
                                and intelligent workflows to create efficient, scalable systems.`,
                                `With experience in tools like React, Spring Boot, Firebase, and various AI platforms, 
                                I also work with data processing, quality checking, and transforming data into 
                                meaningful insights through visualization. This allows me to approach projects 
                                from both a technical and analytical perspective.`,
                                `I am continuously exploring new technologies and improving my skills to stay 
                                adaptable in the fast-evolving tech landscape, with the goal of delivering 
                                impactful, data-driven, and user-focused digital solutions.`
                            ].map((text, i) => (
                                <div key={i} className="overflow-hidden">
                                    <motion.p
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 0.8, delay: i * 0.2 }}
                                    >
                                        {text}
                                    </motion.p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { label: '1+', text: 'Years Experience' },
                                { label: '20+', text: 'Projects Completed' },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-8 rounded-2xl glass border border-white/5 hover:border-accent-orange/30 transition-colors"
                                >
                                    <h3 className="text-3xl font-black text-accent-orange mb-2">{stat.label}</h3>
                                    <p className="text-sm font-bold uppercase tracking-widest text-muted">{stat.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Education Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="p-8 rounded-2xl glass border border-white/5 bg-accent-purple/5 flex items-start gap-6 group"
                        >
                            <div className="p-4 rounded-xl bg-accent-purple/10 text-accent-purple group-hover:scale-110 transition-transform duration-500">
                                <GraduationCap size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Education</h3>
                                <p className="text-lg text-foreground font-medium leading-tight mb-2">
                                    Bachelor of Science In Information Technology
                                </p>
                                <div className="h-1 w-12 bg-accent-purple/30 rounded-full" />
                            </div>
                        </motion.div>

                        {/* Resume Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/1U9BJRni-SSbdQgKNpk336uHvGKKS8AaA/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="relative group block w-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-purple to-accent-orange rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow" />
                            <div className="relative flex items-center justify-center gap-3 p-6 rounded-2xl glass border border-white/10 text-white font-black uppercase tracking-widest text-sm">
                                <FileText size={20} className="text-accent-orange group-hover:scale-125 transition-transform duration-500" />
                                <span>View Full Resume</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                            </div>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


