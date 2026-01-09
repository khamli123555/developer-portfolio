import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-2xl p-6 border border-white/5 transition-all duration-300",
                hoverEffect && "hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,255,156,0.3)] hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
