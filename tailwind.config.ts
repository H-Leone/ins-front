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
        "insightfy-blue": "#0C77F8",
        "insightfy-blue-hover": "#0C77F895",
        "insightfy-white-hover": "#0C77F835",
        "placeholder-text": "#3C3C4360",
        "insightfy-green": "#008000",
        "insightfy-red": "#FF5A5A",
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
