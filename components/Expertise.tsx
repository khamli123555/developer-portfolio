"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";
import SkillsViz from "@/components/SkillsViz";

export default function Expertise() {
    const { t } = useLanguage();

    const skills = [
        {
            icon: <Layout className="text-primary" size={32} />,
            title: t.skills.frontend,
            items: ["HTML, CSS, JavaScript", "React, Next.js", "Tailwind CSS, Bootstrap"],
        },
        {
            icon: <Terminal className="text-secondary" size={32} />,
            title: t.skills.backend,
            items: ["PHP, Python", "Node.js (Basic)",],
        },
        {
            icon: <Database className="text-purple-400" size={32} />,
            title: t.skills.database,
            items: ["MySQL", "MongoDB"],
        },
        {
            icon: <Code2 className="text-pink-400" size={32} />,
            title: t.skills.soft,
            items: t.skills.softSkills,
        },
    ];

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-glow"
                >
                    {t.skills.title}
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left: Visualization (Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="hidden lg:block lg:w-1/3"
                    >
                        <SkillsViz />
                    </motion.div>

                    {/* Right: Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:w-2/3 w-full">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <GlassCard className="h-full flex flex-col items-center text-center hover:bg-white/5">
                                    <div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-white">
                                        {skill.title}
                                    </h3>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        {skill.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
