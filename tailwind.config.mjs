/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    screens: {
      xl: { max: "90rem" }, // 1440px -> 1440 / 16 = 90rem
      lg: { max: "71.875rem" }, // 1150px -> 1150 / 16 = 71.875rem
      md: { max: "47.9375rem" }, // 767px -> 767 / 16 = 47.9375rem
      sm: { max: "39.9375rem" }, // 639px -> 639 / 16 = 39.9375rem
    },
  },
  plugins: [],
};
