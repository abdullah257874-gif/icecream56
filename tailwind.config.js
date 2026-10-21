/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FF6B9D",
        cream: "#FFF7E8",
        brown: "#59352A",
        mint: "#B8E6D0",
        lavender: "#DCD1FF",
        white: "#FFFFFF"
      },
      boxShadow: {
        soft: "0 12px 35px rgba(89, 53, 42, 0.12)",
        card: "0 20px 40px rgba(255, 107, 157, 0.15)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseSoft: "pulseSoft 2s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" }
        }
      }
    }
  },
  plugins: []
};
