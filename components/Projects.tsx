"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import { ExternalLink, Github, Leaf } from "lucide-react";
import Link from "next/link";

export default function Projects() {
    const { t } = useLanguage();

    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-glow-cyan"
                >
                    {t.projects.title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <Link href="/project/plantcare">
                        <GlassCard className="max-w-4xl mx-auto overflow-hidden p-0 border-primary/20 hover:border-primary/50 group cursor-pointer transition-all duration-300 transform hover:scale-[1.02]">
                            <div className="grid md:grid-cols-2">
                                {/* Project Image Placeholder */}
                                <div className="h-64 md:h-auto bg-gradient-to-br from-green-900 to-black flex items-center justify-center p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530968464165-3a18697c842e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:scale-110 transition-transform duration-700" />
                                    <div className="relative z-10 w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Leaf size={48} className="text-primary" />
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary/20 text-primary border border-primary/30">
                                            Featured
                                        </span>
                                        <span className="text-gray-400 text-sm">Web Application</span>
                                    </div>

                                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                                        {t.projects.plantcare.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {t.projects.plantcare.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {["PHP", "MySQL", "JavaScript", "HTML/CSS"].map((tech) => (
                                            <span key={tech} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4 mt-auto">
                                        <button
                                            onClick={() =>
                                                window.open("https://github.com/khamli123555/PlanteCAre", "_blank")
                                            }
                                            className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium"
                                        >
                                            <Github size={18} />
                                            {t.projects.github}
                                        </button>

                                        <button className="flex items-center gap-2 text-white hover:text-primary transition-colors font-medium">
                                            <ExternalLink size={18} /> {t.projects.demo}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
