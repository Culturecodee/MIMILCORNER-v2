import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    DEFAULT: "#faf8f4",
                    dark: "#f0ebe1",
                    muted: "#e8e0d4",
                },
                brown: {
                    light: "#c4a882",
                    DEFAULT: "#8b6343",
                    dark: "#5a3e2b",
                    deep: "#3d2b1a",
                },
                charcoal: {
                    DEFAULT: "#1e1a16",
                    soft: "#3d3530",
                    muted: "#7c6c5a",
                },
                gold: {
                    DEFAULT: "#b8942a",
                    light: "#d4aa47",
                    pale: "#e8d48a",
                },
                border: "#e2d9cc",
            },
            fontFamily: {
                sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
                display: ["Playfair Display", "Georgia", "serif"],
            },
            fontSize: {
                "display-xl": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
                "display-lg": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
                "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
            },
            boxShadow: {
                card: "0 2px 16px rgba(30,26,22,0.07)",
                "card-hover": "0 8px 32px rgba(30,26,22,0.12)",
                nav: "0 1px 0 0 #e2d9cc",
            },
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
            },
        },
    },
    plugins: [],
};

export default config;
