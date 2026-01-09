"use client";

import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Terminal from "@/components/Terminal";
import Timeline from "@/components/Timeline";
import AIAssistant from "@/components/AIAssistant";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="bg-background text-foreground overflow-hidden">
      <Hero />

      {/* Terminal Section */}
      <section className="py-12 bg-black/30 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-gray-400 text-sm font-mono mb-6">INTERACTIVE TERMINAL v1.0</h3>
          <Terminal />
        </div>
      </section>

      <Expertise />

      {/* Education Timeline */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-glow">{t.education.title}</h2>
          <Timeline />
        </div>
      </section>

      <Projects />
      <Contact />
      <AIAssistant />
    </div>
  );
}
