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
        teal: { dark: "#0a1f1f", mid: "#0f2a28", light: "#1a3a36" },
        gold: { DEFAULT: "#c9a84c", light: "#e8c96a" },
      },
    },
  },
};
export default config;
