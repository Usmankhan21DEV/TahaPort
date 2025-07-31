/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0e1a",      // Darker navy blue - represents deep security
        secondary: "#00ff88",    // Bright green - represents security/access granted
        tertiary: "#1a1f2e",     // Dark blue-gray - represents secure environment
        textPrimary: "#e6f3ff",  // Light blue-white - represents clean data
        textSecondary: "#8ba3b8", // Muted blue-gray - represents secondary info
        danger: "#ff4757",       // Red - represents threats/denied access
        warning: "#ffa502",      // Orange - represents warnings
        success: "#2ed573",      // Green - represents success/secure
        info: "#3742fa",         // Blue - represents information
        dark: "#0d1117",         // Very dark - represents deep security
        cyber: "#00d4aa",        // Cyan - represents cybersecurity
        matrix: "#00ff41",       // Matrix green - represents hacking/security
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        cyber: ['Orbitron', 'monospace'],  // Futuristic font for cybersecurity
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        move1: 'move1 8s ease-in-out infinite',
        move2: 'move2 10s ease-in-out infinite',
        move3: 'move3 12s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 3s linear infinite',
        'pulse-cyber': 'pulse-cyber 2s ease-in-out infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        move1: {
          '0%,100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(40px) scale(1.1)' },
        },
        move2: {
          '0%,100%': { transform: 'translateX(0) scale(1)' },
          '50%': { transform: 'translateX(-40px) scale(1.05)' },
        },
        move3: {
          '0%,100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -60%) scale(1.08)' },
        },
        glow: {
          '0%': { 'box-shadow': '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88' },
          '100%': { 'box-shadow': '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-cyber': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animationDelay: {
        100: '100ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0a0e1a 0%, #1a1f2e 50%, #0d1117 100%)',
        'matrix-bg': 'linear-gradient(180deg, rgba(0,255,136,0.1) 0%, transparent 50%, rgba(0,255,136,0.1) 100%)',
        'security-pattern': 'radial-gradient(circle at 25% 25%, rgba(0,255,136,0.1) 0%, transparent 50%)',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 136, 0.3)',
        'cyber-lg': '0 0 40px rgba(0, 255, 136, 0.4)',
        'matrix': '0 0 30px rgba(0, 255, 65, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }) {
      const delays = theme('animationDelay');
      const utilities = Object.entries(delays).map(([key, value]) => {
        return [`.animate-delay-${key}`, { 'animation-delay': value }];
      });
      addUtilities(Object.fromEntries(utilities));
    },
  ],
} 