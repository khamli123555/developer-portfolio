"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full py-8 mt-20 border-t border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    {t.footer.copyright}
                </p>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/khamli123555" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/oussama-el-khamlichi-25943a332/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:khamlichioussama4@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
