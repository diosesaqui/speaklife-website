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
        // SLBlue, from the iOS app's Constants.SLBlue
        slblue: {
          DEFAULT: "#1A264D",
          deep: "#111B3A",
          darkest: "#0B1226",
          lift: "#26356B",
        },
        gold: { DEFAULT: "#c9a84c", light: "#e8c96a" },
      },
    },
  },
};
export default config;
