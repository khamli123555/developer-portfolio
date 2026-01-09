"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

type OutputLine = {
    type: 'input' | 'output' | 'error';
    content: string | React.ReactNode;
};

export default function Terminal() {
    const { t } = useLanguage();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<OutputLine[]>([
        { type: 'output', content: 'Welcome to OK-Shell v1.0.0' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response: OutputLine = { type: 'output', content: '' };

        switch (cleanCmd) {
            case 'help':
                response.content = (
                    <div className="grid grid-cols-2 gap-2 max-w-xs">
                        <span className="text-primary">whoami</span> <span>Profile Info</span>
                        <span className="text-primary">skills</span> <span>Tech Stack</span>
                        <span className="text-primary">projects</span> <span>My Work</span>
                        <span className="text-primary">contact</span> <span>Get in Touch</span>
                        <span className="text-primary">clear</span> <span>Clear Terminal</span>
                    </div>
                );
                break;
            case 'whoami':
                response.content = `${t.about.name} - ${t.about.role}. Based in ${t.about.location}.`;
                break;
            case 'skills':
                response.content = (
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'Node.js', 'Python', 'PHP', 'MySQL'].map(s => (
                            <span key={s} className="bg-white/10 px-1 rounded">{s}</span>
                        ))}
                    </div>
                );
                break;
            case 'projects':
                response.content = "Opening Projects Section...";
                setTimeout(() => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
                break;
            case 'contact':
                response.content = "Navigating to Contact...";
                setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 500);
                break;
            case 'clear':
                setHistory([]);
                return;
            default:
                response = { type: 'error', content: `Command not found: ${cmd}` };
        }

        setHistory(prev => [...prev, { type: 'input', content: cmd }, response]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput('');
    };

    return (
        <div className="w-full max-w-2xl mx-auto my-12">
            <div className="bg-[#1e1e1e] rounded-lg overflow-hidden border border-white/10 shadow-2xl font-mono text-sm md:text-base">
                {/* Header */}
                <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <TerminalIcon size={12} />
                        <span>visitor@khamlichi.dev</span>
                    </div>
                    <div className="w-12" /> {/* Spacer */}
                </div>

                {/* Body */}
                <div className="p-4 h-64 overflow-y-auto space-y-2 text-gray-300 scrollbar-thin scrollbar-thumb-gray-600">
                    {history.map((line, i) => (
                        <div key={i} className="break-words">
                            {line.type === 'input' && (
                                <div className="flex items-center gap-2 text-gray-400">
                                    <span className="text-primary">➜</span>
                                    <span>~</span>
                                    <span className="text-white">{line.content}</span>
                                </div>
                            )}
                            {line.type === 'output' && (
                                <div className="ml-4 text-green-300 opacity-90">
                                    {line.content}
                                </div>
                            )}
                            {line.type === 'error' && (
                                <div className="ml-4 text-red-400">
                                    {line.content}
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="bg-[#252525] p-2 flex items-center gap-2">
                    <span className="text-primary font-bold">➜</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600 focus:ring-0"
                        placeholder="Type 'help'..."
                        autoFocus
                    />
                </form>
            </div>
        </div>
    );
}
