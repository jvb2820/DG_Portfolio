import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Check } from 'lucide-react';

export const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('jeuzvinci7913@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('09393431307');
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    const handleCopyWhatsApp = () => {
        navigator.clipboard.writeText('09999232724');
        setCopiedWhatsApp(true);
        setTimeout(() => setCopiedWhatsApp(false), 2000);
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
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
                >
                    {/* Left Column - Contact Info */}
                    <div className="flex flex-col items-center gap-4">
                        {/* Email */}
                        <a
                            onClick={handleCopyEmail}
                            className="group flex items-center gap-4 cursor-pointer hover:-translate-y-2 transition-transform duration-300 w-full"
                        >
                            <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg relative overflow-hidden shrink-0">
                                {copiedEmail ? (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute inset-0 flex items-center justify-center bg-accent-orange/20"
                                    >
                                        <Check className="text-accent-orange" size={20} />
                                    </motion.div>
                                ) : (
                                    <FaEnvelope className="text-white group-hover:text-accent-orange transition-colors" size={20} />
                                )}
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-muted">Email</span>
                                <span className="text-sm font-bold text-white">
                                    {copiedEmail ? 'Copied!' : 'jeuzvinci7913@gmail.com'}
                                </span>
                            </div>
                        </a>

                        {/* Phone */}
                        <a
                            onClick={handleCopyPhone}
                            className="group flex items-center gap-4 cursor-pointer hover:-translate-y-2 transition-transform duration-300 w-full"
                        >
                            <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg relative overflow-hidden shrink-0">
                                {copiedPhone ? (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute inset-0 flex items-center justify-center bg-accent-orange/20"
                                    >
                                        <Check className="text-accent-orange" size={20} />
                                    </motion.div>
                                ) : (
                                    <FaPhone className="text-white group-hover:text-accent-orange transition-colors" size={20} />
                                )}
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-muted">Phone</span>
                                <span className="text-sm font-bold text-white">
                                    {copiedPhone ? 'Copied!' : '0939 343 1307'}
                                </span>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            onClick={handleCopyWhatsApp}
                            className="group flex items-center gap-4 cursor-pointer hover:-translate-y-2 transition-transform duration-300 w-full"
                        >
                            <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg relative overflow-hidden shrink-0">
                                {copiedWhatsApp ? (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute inset-0 flex items-center justify-center bg-accent-orange/20"
                                    >
                                        <Check className="text-accent-orange" size={20} />
                                    </motion.div>
                                ) : (
                                    <FaWhatsapp className="text-white group-hover:text-accent-orange transition-colors" size={20} />
                                )}
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-muted">WhatsApp</span>
                                <span className="text-sm font-bold text-white">
                                    {copiedWhatsApp ? 'Copied!' : '0999 923 2724'}
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Right Column - Social Links */}
                    <div className="flex flex-col items-center gap-4">
                        {/* GitHub */}
                        <a
                            href="https://github.com/jvb2820"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 w-full"
                        >
                            <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg shrink-0">
                                <FaGithub className="text-white group-hover:text-accent-orange transition-colors" size={20} />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-muted">GitHub</span>
                                <span className="text-sm font-bold text-white group-hover:text-accent-orange transition-colors">
                                    jvb2820
                                </span>
                            </div>
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/jeuz-vinci-bas-b51639341/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 w-full"
                        >
                            <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange group-hover:bg-accent-orange/10 transition-colors shadow-lg shrink-0">
                                <FaLinkedin className="text-white group-hover:text-accent-orange transition-colors" size={20} />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-muted">LinkedIn</span>
                                <span className="text-sm font-bold text-white group-hover:text-accent-orange transition-colors">
                                    Jeuz Vinci Bas
                                </span>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
