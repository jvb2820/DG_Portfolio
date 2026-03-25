import { ArrowUp } from 'lucide-react';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-white/5 bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-2xl font-display font-black">
                        JV<span className="text-accent-orange">.</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-accent-orange transition-colors"
                    >
                        Back to top
                        <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center group-hover:border-accent-orange transition-all">
                            <ArrowUp size={18} />
                        </div>
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-12">
                    <p className="text-muted text-sm font-medium">
                        © 2026 Jeuz Vinci's Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

