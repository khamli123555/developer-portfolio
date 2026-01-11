"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Code, Cpu, Layers } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "./ui/GlassCard";

export default function Hero() {
    const { t } = useLanguage();

    const stats = [
        { label: "Experience", value: "Etudiant ", icon: <Terminal size={16} /> },
        { label: "Projets", value: "2", icon: <Layers size={16} /> },
        { label: "Tech", value: "Modern", icon: <Cpu size={16} /> },
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative pt-24 pb-12 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Column: Profile & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col text-center lg:text-left items-center lg:items-start"
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-primary/30 bg-black/40 backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-primary text-sm font-bold tracking-wider">AVAILABLE FOR FREELANCE</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                        {t.about.name} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {t.hero.title}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                        {t.hero.tagline}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <a
                            href="#contact"
                            className="group px-8 py-3 bg-primary text-black font-bold rounded-full flex items-center gap-2 hover:bg-white transition-all hover:shadow-[0_0_20px_rgba(0,255,156,0.6)]"
                        >
                            {t.hero.connect}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <button
                            type="button"
                            onClick={() => {
                                const link = document.createElement("a");
                                link.href = "/cv.pdf";
                                link.download = "My_CV.pdf"; // rename downloaded file
                                document.body.appendChild(link);
                                link.click();
                                link.remove();
                            }}
                            className="px-8 py-3 border border-white/20 text-white font-medium rounded-full flex items-center gap-2 hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                        >
                            <Download size={18} />
                            {t.hero.downloadCV}
                        </button>

                    </div>
                </motion.div>

                {/* Right Column: Dashboard Panel */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <GlassCard className="p-8 border-primary/20 bg-black/60 relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="relative w-24 h-24 rounded-full border-2 border-primary/50 p-1">
                                <Image
                                    src="/profile.png"
                                    alt="Oussama"
                                    width={96}
                                    height={96}
                                    className="rounded-full object-cover w-full h-full"
                                />
                                <div className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full border-4 border-black" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">System Online</h3>
                                <p className="text-gray-400 text-sm font-mono">ID: DEV-2026-OK</p>
                                <p className="text-primary text-xs font-mono mt-1">LOC: MOROCCO</p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                                        {stat.icon}
                                        {stat.label}
                                    </div>
                                    <div className="text-2xl font-bold text-white font-mono">
                                        {stat.value}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Elements */}
                        <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-end">
                            <div className="font-mono text-xs text-gray-500">
                                cpu_usage: 12% <br />
                                mem_load: 34%
                            </div>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className={`w-1 h-6 rounded-full ${i < 4 ? 'bg-primary/50' : 'bg-gray-700'}`} />
                                ))}
                            </div>
                        </div>
                    </GlassCard>

                    {/* Back Elements */}
                    <div className="absolute -top-4 -right-4 w-full h-full border border-secondary/20 rounded-2xl -z-10" />
                    <div className="absolute -bottom-4 -left-4 w-full h-full border border-primary/20 rounded-2xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
