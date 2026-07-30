/**
 * Tailwind CSS Configuration for Sujit More Portfolio
 */
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#060911',
          card: 'rgba(15, 22, 36, 0.75)',
          hover: 'rgba(22, 32, 54, 0.9)',
          glass: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accent: {
          cyan: '#00f2fe',
          blue: '#4facfe',
          purple: '#7f53ac',
          emerald: '#00f5a0',
          amber: '#ffb703',
          pink: '#ff007f',
        },
        flutter: {
          blue: '#02569B',
          lightBlue: '#0175C2',
          cyan: '#13B9F6',
        }
      },
      fontFamily: {
        sans: ['Outfit', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(0, 242, 254, 0.2)',
        'glow-cyan': '0 0 25px rgba(0, 242, 254, 0.35)',
        'glow-purple': '0 0 25px rgba(127, 83, 172, 0.35)',
        'glow-emerald': '0 0 25px rgba(0, 245, 160, 0.35)',
        card: '0 12px 35px -10px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        pulseSlow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  }
};
