import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                "background-secondary": "#0B0F14",
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#00FF9C", // Neon Green
                    glow: "rgba(0, 255, 156, 0.5)",
                },
                secondary: {
                    DEFAULT: "#00F3FF", // Cyan
                    glow: "rgba(0, 243, 255, 0.5)",
                },
                card: "rgba(255, 255, 255, 0.05)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            animation: {
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                float: "float 6s ease-in-out infinite",
                "spin-slow": "spin 8s linear infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-20px)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
