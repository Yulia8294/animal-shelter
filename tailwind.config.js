import { button, nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": { opacity: 0, transform: "translateX(10px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s forwards",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        offWhite: {
          500: "#F5F5F5"
        },
        accentGreen: {
          50: "#e9edeb",
          100: "#d3dcd6",
          200: "#a6b8ae",
          300: "#7a9585",
          400: "#4d715d",
          500: "#104210",
          600: "#1a3e2a",
          700: "#142f1f",
          800: "#0d1f15",
          900: "#07100a",
        },
        accentYellow: {
          50: "#fef5e7",
          100: "#fdebce",
          200: "#fbd89e",
          300: "#f8c46d",
          400: "#f6b13d",
          500: "#f49d0c",
          600: "#c37e0a",
          700: "#925e07",
          800: "#623f05",
          900: "#311f02",
        },
        accentPurple: {
          500: "#966B9D",
        },
        foreground: "#231d1a",
        background: "#fbfefb",
        warning: "#f49d0c",
        primary: {
          50: "#e9e8e8",
          100: "#d3d2d1",
          200: "#a7a5a3",
          300: "#7b7776",
          400: "#4f4a48",
          500: "#231d1a",
          600: "#1c1715",
          700: "#151110",
          800: "#0e0c0a",
          900: "#070605",
        },
        secondary: {
          50: "#f1efee",
          100: "#e3dfdd",
          200: "#c7bfbb",
          300: "#aa9e98",
          400: "#8e7e76",
          500: "#725e54",
          600: "#5b4b43",
          700: "#443832",
          800: "#2e2622",
          900: "#171311",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            offWhite: {
              500: "#F5F5F5"
            },
            accentGreen: {
              50: "#e9edeb",
              100: "#d3dcd6",
              200: "#a6b8ae",
              300: "#7a9585",
              400: "#4d715d",
              500: "#104210",
              600: "#1a3e2a",
              700: "#142f1f",
              800: "#0d1f15",
              900: "#07100a",
            },
            accentYellow: {
              50: "#fef5e7",
              100: "#fdebce",
              200: "#fbd89e",
              300: "#f8c46d",
              400: "#f6b13d",
              500: "#f49d0c",
              600: "#c37e0a",
              700: "#925e07",
              800: "#623f05",
              900: "#311f02",
            },
            accentPurple: {
              500: "#966B9D",
            },
            warning: "#f49d0c",
            foreground: "#231d1a",
            background: "#fbfefb",
            primary: {
              50: "#e9e8e8",
              100: "#d3d2d1",
              200: "#a7a5a3",
              300: "#7b7776",
              400: "#4f4a48",
              500: "#231d1a",
              600: "#1c1715",
              700: "#151110",
              800: "#0e0c0a",
              900: "#070605",
            },
            secondary: {
              50: "#f1efee",
              100: "#e3dfdd",
              200: "#c7bfbb",
              300: "#aa9e98",
              400: "#8e7e76",
              500: "#725e54",
              600: "#5b4b43",
              700: "#443832",
              800: "#2e2622",
              900: "#171311",
            },
          },
        },
      },
    }),
  ],
};
