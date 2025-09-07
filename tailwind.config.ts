import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./{app,src,components,templates}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;
