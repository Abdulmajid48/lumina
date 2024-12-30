import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mona: ["Mona Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        readex: ["var(--font-readex-pro)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        mulish: ["var(--font-mulish)", "sans-serif"],
        publicsans: ['"Public Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
