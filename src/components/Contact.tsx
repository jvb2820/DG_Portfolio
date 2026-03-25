import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Check } from 'lucide-react';

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jeuzvinci7913@gmail.com');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        CONTACT <span className="text-gradient">ME</span>
                    </h2>
                    <p className="text-muted text-lg max-w-xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center justify-center gap-4"
                >
                    {/* Email */}
                    <div
                        onClick={handleCopyEmail}
                        className="group flex flex-col items-center gap-3 cursor-pointer hover:-translate-y-2 transition-transform duration-300 relative"
                    >
                        <div className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg relative overflow-hidden">
                            {copied ? (
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute inset-0 flex items-center justify-center bg-accent-orange/20"
                                >
                                    <Check className="text-accent-orange" size={28} />
                                </motion.div>
                            ) : (
                                <FaEnvelope className="text-white group-hover:text-accent-orange transition-colors" size={28} />
                            )}
                        </div>
                        <span className="text-sm font-bold text-muted transition-colors text-center w-full">
                            <span className="block group-hover:hidden">Email</span>
                            <span className="hidden group-hover:block text-white">
                                {copied ? 'Copied!' : 'jeuzvinci7913@gmail.com'}
                            </span>
                        </span>
                    </div>

                    {/* GitHub */}
                    <a
                        href="https://github.com/jvb2820"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg">
                            <FaGithub className="text-white group-hover:text-accent-orange transition-colors" size={28} />
                        </div>
                        <span className="text-sm font-bold text-muted group-hover:text-white transition-colors">
                            GitHub
                        </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/jeuz-vinci-bas-b51639341/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-3 hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg">
                            <FaLinkedin className="text-white group-hover:text-accent-orange transition-colors" size={28} />
                        </div>
                        <span className="text-sm font-bold text-muted group-hover:text-white transition-colors">
                            LinkedIn
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
