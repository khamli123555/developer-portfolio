"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GlassCard } from "./ui/GlassCard";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("https://formspree.io/f/maqqwzql", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
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
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">
                    {t.contact.name}
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    required
                    className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Hamza mechaal"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">
                    {t.contact.email}
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    required
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  rows={5}
                  required
                  className="bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Hello..."
                />
              </div>

              {/* Status message */}
              {status === "success" && (
                <p className="text-sm text-green-400">✅Your message has been sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">❌ Something went wrong, please try again.</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="mt-4 py-3 bg-primary text-black font-bold rounded-lg hover:bg-white transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,255,156,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : t.contact.send}
                <Send size={18} />
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
