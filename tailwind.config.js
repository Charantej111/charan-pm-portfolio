/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F7F7",
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#111111",
          secondary: "#4F4F4F",
          muted: "#767676",
          faint: "#A3A3A3"
        },
        brand: {
          lime: "#C9EE7D",
          limeHover: "#B8E662",
          blue: "#008FF0",
          purple: "#8427DE",
          orange: "#F4AC28"
        },
        card: {
          light: "#FFFFFF",
          dark: "#212124",
          darkHover: "#28282C",
        },
        line: {
          DEFAULT: "#E5E5E5",
          dark: "#333336"
        }
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Fragment Mono"', '"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      boxShadow: {
        'subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'float': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.2)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

