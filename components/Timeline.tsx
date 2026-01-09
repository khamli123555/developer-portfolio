"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Timeline() {
    const { t } = useLanguage();

    return (
        <div className="relative max-w-2xl mx-auto py-12 px-4">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />

            <div className="space-y-12">
                {t.education.items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-20"
                    >
                        {/* Node */}
                        <div className="absolute left-[26px] top-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,156,0.8)] z-10" />

                        {/* Content */}
                        <div className="bg-white/5 border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-colors">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2 border border-primary/20">
                                {item.year}
                            </span>
                            <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <GraduationCap size={16} />
                                {item.institution}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
