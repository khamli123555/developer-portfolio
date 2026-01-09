"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-24 relative">
            {/* Background Elements */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse-slow" />

            <div className="container mx-auto px-4 max-w-2xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-white"
                >
                    {t.contact.title}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <GlassCard className="p-8 md:p-12">
                        <form className="flex flex-col gap-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">
                                        {t.contact.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="Hamza mechaal"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">
                                        {t.contact.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="hamza@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">
                                    {t.contact.message}
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                    placeholder="Hello..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 py-3 bg-primary text-black font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,255,156,0.4)]"
                            >
                                {t.contact.send}
                                <Send size={18} />
                            </button>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
