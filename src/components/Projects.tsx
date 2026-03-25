import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Layers, Database, ArrowUpRight, X } from 'lucide-react';

interface FeaturedProject {
    title: string;
    description: string;
    fullDescription: string;
    tech: string[];
    image: string;
}

const featuredProjects: FeaturedProject[] = [
    {
        title: 'Employee Time Tracking System',
        description: 'Web-based time tracking app with precision monitoring, automatic calculations, and idle detection.',
        fullDescription: 'A comprehensive web-based time tracking application designed to monitor employee work hours with precision. Features include automatic time calculations, idle time detection, and payroll-ready data extraction. The system comes with a dedicated user interface for employees and a separate admin interface for managers to oversee team productivity and generate detailed reports for streamlined workforce management.',
        tech: ['React', 'Firebase', 'Tailwind'],
        image: '/timetracker.jpeg',
    },
    {
        title: 'CVision (Object Detection)',
        description: 'Real-time computer vision application detecting and classifying objects using trained datasets.',
        fullDescription: 'A computer vision application that detects and classifies objects in real time using trained datasets and live camera input. Leverages deep learning models for accurate object recognition, supporting multiple object classes simultaneously. The system processes video feeds frame-by-frame, drawing bounding boxes and confidence scores around detected objects for practical use in surveillance, inventory, and automation contexts.',
        tech: ['Python', 'OpenCV', 'TensorFlow'],
        image: '/cvision.jpeg',
    },
    {
        title: 'AI Chatbot (Streamlit)',
        description: 'Lightweight AI chatbot capable of handling user queries with an interactive interface.',
        fullDescription: 'A lightweight AI chatbot capable of handling user queries and generating intelligent responses through an interactive Streamlit interface. Powered by large language model APIs, the chatbot supports multi-turn conversations, context retention, and customizable system prompts. Designed for rapid prototyping and deployment, making it ideal for customer support demos, knowledge base assistants, and educational tools.',
        tech: ['Python', 'Streamlit', 'Cohere API'],
        image: '/chatbot.jpeg',
    },
    {
        title: 'Digital Portfolio Development',
        description: 'Developed various high-end portfolio web applications tailored to specific client requirements, branding, and dynamic user experiences.',
        fullDescription: 'A collection of responsive and modern portfolio websites built for personal and client use, focusing on clean UI/UX, performance, and premium animations. Each portfolio is custom-tailored to the client\'s branding guidelines, featuring dynamic scroll effects, smooth transitions, and mobile-first responsive design. Deployed across platforms like Vercel and Netlify for fast, reliable hosting.',
        tech: ['React', 'Vite', 'Vercel'],
        image: '/digital.jpeg',
    },
    {
        title: 'Data Visualization Web App',
        description: 'Transforms Excel datasets into interactive charts and dashboards for real-time insights.',
        fullDescription: 'A data visualization web application that transforms raw Excel datasets into interactive charts, graphs, and dashboards for real-time data insights. Supports multiple chart types including bar, line, pie, and area charts with filtering and drill-down capabilities. Designed to empower non-technical users to upload spreadsheets and instantly generate meaningful visual representations for data-driven decision-making.',
        tech: ['React', 'Chart.js', 'Excel'],
        image: '/data-viz.jpeg',
    },
];

const involvedProjects = [
    {
        title: 'SPOTSelect',
        role: 'Incubatee Review System',
        description: 'A multi-role web platform that streamlines the application review and selection process for incubation programs.',
        tech: ['Java', 'PostgreSQL']
    },
    {
        title: 'AI Automation Workflows',
        role: 'Automation Pipelines',
        description: 'Automation pipelines integrating AI tools to streamline repetitive processes and improve efficiency.',
        tech: ['n8n', 'APIs']
    },
    {
        title: 'AI Agent Prototypes',
        role: 'Autonomous Workflows',
        description: 'Basic AI agents capable of executing tasks and assisting workflows using prompt-based logic and integrations.',
        tech: ['Python', 'LLMs']
    },
    {
        title: 'Data Analytics Projects',
        role: 'Cleaning & Insights',
        description: 'Projects focused on data cleaning, processing, and extracting insights for decision-making.',
        tech: ['Excel', 'Power BI']
    },
    {
        title: 'Basic Game Development',
        role: '2D Browser Games',
        description: 'Simple 2D browser-based games focused on interactivity and core mechanics.',
        tech: ['HTML', 'JS']
    },
    {
        title: 'Parking System Web App',
        role: 'Management Workflow',
        description: 'A system designed to manage parking registration, tracking, and payments in a digital workflow.',
        tech: ['JS', 'Firebase']
    },
    {
        title: 'Qwarta',
        role: 'Payment Processing',
        description: 'A Python-based system designed to handle secure and efficient payment transactions.',
        tech: ['Python', 'Flask']
    },
];

const contributedProjects = [
    {
        title: 'Learning Management System',
        focus: 'Managed courses',
        description: 'A platform for managing courses, users, and learning content in a structured environment.',
        tech: ['React', 'APIs']
    },
    {
        title: 'PDF-to-Book Converter',
        focus: 'File Processing',
        description: 'A system that converts PDF files into structured, readable book formats.',
        tech: ['Python', 'Libs']
    },
    {
        title: 'Web Scraping System',
        focus: 'Content Extraction',
        description: 'A scraping platform used to collect and process web-based content such as posters and listings.',
        tech: ['Scrapy', 'Python']
    },

];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<FeaturedProject | null>(null);

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background">
            <div className="container mx-auto px-6 max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-end mb-16 border-b border-white/10 pb-6"
                >
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                        SELECTED <span className="text-gradient">WORKS</span>
                    </h2>
                </motion.div>

                {/* FEATURED PROJECTS - COMPACT GRID */}
                <div className="mb-20">
                    <h3 className="text-sm font-bold text-muted uppercase tracking-widest mb-8 flex items-center gap-2">
                        <Code size={16} className="text-accent-orange" /> Featured Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                onClick={() => setSelectedProject(project)}
                                className="group p-5 rounded-2xl glass border border-white/5 hover:border-accent-orange/30 transition-all cursor-pointer flex flex-col"
                            >
                                <div className="aspect-video rounded-xl mb-5 overflow-hidden relative bg-white/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                                        <ExternalLink size={14} className="text-white" />
                                    </div>
                                </div>
                                <h4 className="text-lg font-bold mb-2 group-hover:text-accent-orange transition-colors">{project.title}</h4>
                                <p className="text-xs text-muted mb-5 line-clamp-2 leading-relaxed flex-grow">{project.description}</p>
                                <div className="flex gap-2 flex-wrap mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold text-white/60 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* PROJECTS INVOLVED IN - SLEEK LIST */}
                    <div>
                        <h3 className="text-sm font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Layers size={16} className="text-accent-purple" /> Projects Involved In
                        </h3>
                        <div className="flex flex-col border-t border-white/5">
                            {involvedProjects.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="border-b border-white/5 group cursor-pointer"
                                >
                                    <div className="flex justify-between items-center py-4 transition-all group-hover:pl-2">
                                        <div>
                                            <h4 className="text-sm md:text-base font-bold group-hover:text-accent-purple transition-colors">{project.title}</h4>
                                            <span className="text-xs text-muted font-medium">{project.role}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="hidden md:flex gap-1.5">
                                                {project.tech.map(t => (
                                                    <span key={t} className="text-[9px] font-bold text-white/40 uppercase tracking-wider">{t}</span>
                                                ))}
                                            </div>
                                            <ArrowUpRight size={16} className="text-white/20 group-hover:text-accent-purple transition-colors" />
                                        </div>
                                    </div>

                                    {/* Expandable Description */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                        <div className="overflow-hidden">
                                            <p className="text-xs text-muted pb-4 px-2 tracking-wide leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* PROJECTS CONTRIBUTED TO - SLEEK LIST */}
                    <div>
                        <h3 className="text-sm font-bold text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Database size={16} className="text-accent-orange" /> Projects Contributed To
                        </h3>
                        <div className="flex flex-col border-t border-white/5">
                            {contributedProjects.map((project, i) => (
                                <motion.div
                                    key={project.title}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="border-b border-white/5 group cursor-pointer"
                                >
                                    <div className="flex justify-between items-center py-4 transition-all group-hover:pl-2">
                                        <div>
                                            <h4 className="text-sm md:text-base font-bold group-hover:text-accent-orange transition-colors">{project.title}</h4>
                                            <span className="text-xs text-muted font-medium">{project.focus}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="hidden md:flex gap-1.5">
                                                {project.tech.map(t => (
                                                    <span key={t} className="text-[9px] font-bold text-white/40 uppercase tracking-wider">{t}</span>
                                                ))}
                                            </div>
                                            <ArrowUpRight size={16} className="text-white/20 group-hover:text-accent-orange transition-colors" />
                                        </div>
                                    </div>

                                    {/* Expandable Description */}
                                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                                        <div className="overflow-hidden">
                                            <p className="text-xs text-muted pb-4 px-2 tracking-wide leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* FEATURED PROJECT MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                        onClick={() => setSelectedProject(null)}
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
                            className="relative w-full max-w-2xl glass border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <X size={18} className="text-white" />
                            </button>

                            {/* Image */}
                            <div className="aspect-video w-full overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Details */}
                            <div className="p-8">
                                <h3 className="text-2xl font-black mb-4 text-accent-orange">{selectedProject.title}</h3>
                                <p className="text-sm text-white/70 leading-relaxed mb-6">{selectedProject.fullDescription}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {selectedProject.tech.map(t => (
                                        <span key={t} className="text-[10px] font-bold text-white/60 uppercase tracking-widest bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};


