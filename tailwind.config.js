/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0a0a0a",
          charcoal: "#1a1a1a",
          dark: "#2a2a2a",
          gold: "#d4af37",
          bronze: "#b8860b",
          cream: "#f5f5dc",
          warm: "#c9a876",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-luxury": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        "gradient-gold": "linear-gradient(135deg, #d4af37 0%, #b8860b 100%)",
      },
      boxShadow: {
        "luxury": "0 20px 60px rgba(0, 0, 0, 0.8)",
        "luxury-sm": "0 10px 30px rgba(0, 0, 0, 0.6)",
        "gold-glow": "0 0 30px rgba(212, 175, 55, 0.3)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-slower": "float 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(212, 175, 55, 0.5)" },
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
