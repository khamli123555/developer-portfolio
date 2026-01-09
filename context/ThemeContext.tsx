"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'cyber' | 'stealth';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('cyber');

    const toggleTheme = () => {
        setTheme(prev => prev === 'cyber' ? 'stealth' : 'cyber');
    };

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'stealth') {
            root.style.setProperty('--color-primary', '#cccccc');
            root.style.setProperty('--color-primary-glow', 'rgba(200, 200, 200, 0.1)');
            root.style.setProperty('--color-secondary', '#888888');
            root.style.setProperty('--color-secondary-glow', 'rgba(136, 136, 136, 0.1)');
            root.style.setProperty('--color-background', '#080808');
        } else {
            root.style.setProperty('--color-primary', '#00FF9C');
            root.style.setProperty('--color-primary-glow', 'rgba(0, 255, 156, 0.5)');
            root.style.setProperty('--color-secondary', '#00F3FF');
            root.style.setProperty('--color-secondary-glow', 'rgba(0, 243, 255, 0.5)');
            root.style.setProperty('--color-background', '#050505');
        }
    }, [theme]);

    // Initial set
    useEffect(() => {
        document.documentElement.style.setProperty('--color-primary', '#00FF9C');
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
