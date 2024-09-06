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
        "insightfy-gradient":
          "linear-gradient(180deg, rgba(0,115,252,1) 0%, rgba(85,106,254,1) 82%, rgba(130,102,255,1) 100%)",
      },
      colors: {
        "insightfy-blue": "#0073FC",
        "insightfy-dark-blue": "#170F49",
        "insightfy-blue-hover": "#0C77F895",
        "insightfy-white-hover": "#0C77F835",
        "insightfy-green": "#008000",
        "insightfy-red": "#FF5A5A",
        "insightfy-dark-red": "#AE0101",
        "insightfy-gray": "#B3B3B3",
        "insightfy-light-gray": "#F0F2F5",
        "insightfy-dark-gray": "#3D404A",
        "placeholder-text": "#3C3C4360",
        "insightfy-neutral": "#A0A3BD",
        "insightfy-surface": "#F8FAFC",
        "insightfy-textdark-gray": "#908484",
        "insightfy-border": "#8A8A8E",
      },
      textColor: {
        "ins-blue": "#0073FC",
      },
      backgroundColor: {
        "ins-blue": "#0073FC",
      },
    },
  },
  plugins: [],
};
export default config;
