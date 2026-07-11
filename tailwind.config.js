/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F5F0", // Warm paper white
        cream: "#EAE7DF",
        surface: "#F0EFEB",
        primary: "#1A1A1A", // Almost black
        secondary: "#8B8C7A", // Muted olive
        tertiary: "#A9A9A9", // Stone grey
        accent: "#C4A484", // Muted gold
        text: "#1A1A1A",
        textMuted: "#6B6B6B",
        charcoal: "#333333",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica Neue", "sans-serif"],
        editorial: ["Playfair Display", "serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
