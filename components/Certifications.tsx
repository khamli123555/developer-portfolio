"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, FileBadge } from "lucide-react";

export default function Certifications() {
    const { t } = useLanguage();

    return (
        <section id="certifications" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-glow"
                >
                    {t.certifications.title}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.certifications.items.map((cert: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col justify-between p-8 group hover:bg-white/5 transition-colors">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                            <Award className="w-8 h-8 text-primary" />
                                        </div>
                                        <span className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                            <Calendar size={14} />
                                            {cert.year}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                                        {cert.name}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex items-center gap-2">
                                        <FileBadge size={16} />
                                        {cert.issuer}
                                    </p>
                                </div>

                                <a
                                    href={cert.link}
                                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                                >
                                    View Certificate <ExternalLink size={14} />
                                </a>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
