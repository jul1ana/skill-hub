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
        "primary": "#010851",
        "secondary": "#9A7AF1",
        "tartiary": "#707070",
        "pink": "#EE9AE5"
      },
      boxShadow: {
        "3xl": "0px 10px 50px 0px rgba(0, 0, 0, 0.15)",
      }
    },
  },
  plugins: [],
};
export default config;
