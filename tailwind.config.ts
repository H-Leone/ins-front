import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "insigthfy-gradient": "linear-gradient(180deg, rgba(0,115,252,1) 0%, rgba(85,106,254,1) 82%, rgba(130,102,255,1) 100%)",
      },
      textColor: {
        "ins-blue": "#0073FC"
      },
      backgroundColor: {
        "ins-blue": "#0073FC"
      }
    },
  },
  plugins: [],
};
export default config;
