"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Layout, Server, Code, LucideIcon } from "lucide-react";

export default function SkillsViz() {
    const satellites: { Icon: LucideIcon; label: string; color: string; delay: number }[] = [
        { Icon: Layout, label: "React", color: "bg-blue-500", delay: 0 },
        { Icon: Server, label: "Node.js", color: "bg-green-500", delay: 1 },
        { Icon: Database, label: "MySQL", color: "bg-orange-500", delay: 2 },
        { Icon: Code, label: "Next.js", color: "bg-white", delay: 3 },
    ];

    return (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto flex items-center justify-center">
            {/* Orbits */}
            <div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full animate-spin-slow" />
            <div className="absolute w-[100%] h-[100%] border border-white/5 rounded-full animate-spin-slow [--tw-spin-reverse]" />

            {/* Central Node */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-black border border-primary/50 shadow-[0_0_30px_rgba(0,255,156,0.3)] flex items-center justify-center flex-col">
                <span className="text-primary font-bold text-lg">FS</span>
                <span className="text-[10px] text-gray-400">Full Stack</span>
            </div>

            {/* Orbiting Satellites */}
            {satellites.map((sat, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-full h-12 -translate-y-1/2 -translate-x-1/2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: -sat.delay * 2.5 }}
                    style={{ width: `${60 + i * 20}%` }} // Staggered orbit text-center
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2">
                        <div className={`w-10 h-10 rounded-full ${sat.color} bg-opacity-20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg`}>
                            <sat.Icon size={18} />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
