"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Leaf } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

export default function PlantCarePage() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4">
                <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold">
                        FEATURED PROJECT
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-glow-cyan">PlantCare</h1>
                    <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                        A comprehensive plant management system designed to help users track, monitor, and care for their indoor garden.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Project Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="rounded-2xl overflow-hidden border border-white/10 h-80 bg-gradient-to-br from-green-900 to-black relative flex items-center justify-center group"
                        >
                            <Leaf size={64} className="text-primary opacity-50 group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black/20" />
                        </motion.div>

                        {/* Problem & Solution */}
                        <GlassCard className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">The Challenge</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Plant owners often struggle to keep track of watering schedules, especially with multiple plant species requiring different care. Existing solutions were either too complex or lacked visual management.
                            </p>

                            <h2 className="text-2xl font-bold text-white mb-4">The Solution</h2>
                            <p className="text-gray-400 leading-relaxed">
                                PlantCare provides a visual dashboard where users can add plants, set custom reminders, and view the health status of their entire garden at a glance. We implemented a clean, card-based UI to make management intuitive.
                            </p>
                        </GlassCard>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="space-y-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"].map(tech => (
                                    <span key={tech} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-300 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>

                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li className="flex items-center gap-2">✔ User Authentication</li>
                                <li className="flex items-center gap-2">✔ CRUD Operations for Plants</li>
                                <li className="flex items-center gap-2">✔ Categorization System</li>
                                <li className="flex items-center gap-2">✔ Status Tracking</li>
                                <li className="flex items-center gap-2">✔ Responsive Design</li>
                            </ul>
                        </GlassCard>

                        <div className="flex flex-col gap-3">
                            <button className="w-full py-3 bg-primary text-black font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2">
                                <ExternalLink size={18} /> Live Demo
                            </button>
                            <button className="w-full py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                <Github size={18} /> View Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
