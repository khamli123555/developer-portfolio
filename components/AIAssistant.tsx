"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
};

export default function AIAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: "Hello! I'm Oussama's AI Assistant. Ask me anything!", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isOpen]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Mock Response
        setTimeout(() => {
            let botResponse = "That's an interesting question! Detailed answers are coming soon in v2.";
            const lw = userMsg.text.toLowerCase();
            if (lw.includes('hire') || lw.includes('job')) botResponse = "Oussama is currently available for freelance and full-time roles! Check the Contact section.";
            if (lw.includes('stack') || lw.includes('tech')) botResponse = "He works with the MERN stack for full-stack, and Next.js + Tailwind for frontend excellence.";
            if (lw.includes('contact') || lw.includes('email')) botResponse = "You can email him at contact@khamlichi.dev or use the form below.";

            const botMsg: Message = { id: (Date.now() + 1).toString(), text: botResponse, sender: 'bot' };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-black rounded-full shadow-[0_0_20px_rgba(0,255,156,0.4)] flex items-center justify-center z-50 hover:scale-110 transition-transform"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ rotate: 15 }}
            >
                {isOpen ? <X /> : <MessageSquare />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 bg-[#111] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col h-[400px]"
                    >
                        {/* Header */}
                        <div className="bg-primary/10 p-4 border-b border-primary/20 flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-full">
                                <Bot size={20} className="text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                                <p className="text-xs text-green-400 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    Online
                                </p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-primary text-black rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-[#151515] flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                placeholder="Ask me something..."
                                className="flex-1 bg-black/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary/50"
                            />
                            <button type="submit" className="p-2 bg-primary/20 text-primary rounded-full hover:bg-primary hover:text-black transition-colors">
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
