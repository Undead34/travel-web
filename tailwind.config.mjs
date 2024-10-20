/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "bright-gray": "#ededed",
        "eerie-black": "#121921",
      },
    },
  },
  plugins: [animations],
};
