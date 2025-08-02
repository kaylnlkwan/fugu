/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinetype: ["GT Cinetype", "monospace"],
        "cinetype-light": ["GT Cinetype Light", "monospace"],
        "cinetype-bold": ["GT Cinetype Bold", "monospace"],
        "cinetype-mono": ["GT Cinetype Mono", "monospace"],
      },
      colors: {
        accent: {
          coral: "#FF6E74",
          blue: "#73CEFF",
          lime: "#B8E852",
          pink: "#F08AB8",
          yellow: "#FDC916",
          green: "#3A9813",
        },
      },
    },
  },
  plugins: [],
};
