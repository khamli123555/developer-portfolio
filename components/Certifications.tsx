"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GlassCard } from "./ui/GlassCard";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ExternalLink, FileBadge, X, Download, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Certifications() {
    const { t } = useLanguage();
    const [selectedCert, setSelectedCert] = useState<any>(null);

    // Close on ESC
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedCert(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

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
                            layoutId={`cert-card-${index}`}
                            onClick={() => setSelectedCert({ ...cert, index })}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="cursor-pointer group"
                        >
                            <GlassCard className="h-full flex flex-col justify-between p-8 group-hover:bg-white/5 transition-colors relative overflow-hidden">
                                <div>
                                    <div className="flex justify-between items-start mb-6">
                                        <motion.div
                                            layoutId={`cert-icon-${index}`}
                                            className="p-3 bg-primary/10 rounded-xl border border-primary/20 group-hover:bg-primary/20 transition-colors"
                                        >
                                            <Award className="w-8 h-8 text-primary" />
                                        </motion.div>
                                        <span className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                            <Calendar size={14} />
                                            {cert.year}
                                        </span>
                                    </div>

                                    <motion.h3
                                        layoutId={`cert-title-${index}`}
                                        className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors"
                                    >
                                        {cert.name}
                                    </motion.h3>

                                    <motion.p
                                        layoutId={`cert-issuer-${index}`}
                                        className="text-gray-400 text-sm mb-6 flex items-center gap-2"
                                    >
                                        <FileBadge size={16} />
                                        {cert.issuer}
                                    </motion.p>
                                </div>

                                <div className="inline-flex items-center gap-2 text-sm text-primary group-hover:text-primary/80 transition-colors mt-auto opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                    Click to details <ExternalLink size={14} />
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        />
                        <div className="fixed inset-0 z-[51] flex items-center justify-center p-4 pointer-events-none">
                            <motion.div
                                layoutId={`cert-card-${selectedCert.index}`}
                                className="w-full max-w-2xl bg-[#0a0a0a] border border-primary/30 rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(0,255,156,0.2)] pointer-events-auto"
                            >
                                <div className="relative">
                                    {/* Abstract Header/Image Placeholder */}
                                    <div className="h-48 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,255,147,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-gradient-xy" />
                                        <motion.div
                                            layoutId={`cert-icon-${selectedCert.index}`}
                                            className="w-20 h-20 bg-primary/10 rounded-2xl border border-primary/20 flex items-center justify-center"
                                        >
                                            <Award className="w-10 h-10 text-primary" />
                                        </motion.div>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
                                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex justify-between items-start mb-6">
                                            <div>
                                                <motion.h3
                                                    layoutId={`cert-title-${selectedCert.index}`}
                                                    className="text-3xl font-bold text-white mb-2"
                                                >
                                                    {selectedCert.name}
                                                </motion.h3>
                                                <motion.p
                                                    layoutId={`cert-issuer-${selectedCert.index}`}
                                                    className="text-xl text-primary flex items-center gap-2"
                                                >
                                                    <FileBadge size={20} />
                                                    {selectedCert.issuer}
                                                </motion.p>
                                            </div>
                                            <span className="text-gray-400 font-mono text-lg border border-white/10 px-4 py-1 rounded-full">
                                                {selectedCert.year}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                            <button
                                                className="flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 py-3 rounded-xl transition-all font-medium group"
                                                onClick={() => window.open(selectedCert.verifyLink, '_blank')}
                                            >
                                                <CheckCircle size={18} />
                                                Verify Credential
                                            </button>
                                            <button
                                                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 rounded-xl transition-all font-medium"
                                                onClick={() => window.open(selectedCert.downloadLink, '_blank')}
                                            >
                                                <Download size={18} />
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
