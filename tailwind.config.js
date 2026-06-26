/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand WinWin Immo ── */
        'brand-dark':       '#020f05',   /* darkest bg */
        'brand-forest':     '#031a0c',   /* deep bg */
        'brand-primary':    '#06733D',   /* dark green (logo shield) */
        'brand-bright':     '#0AAE3D',   /* bright green (WinWin text) */
        'brand-pistachio':  '#A5D232',   /* pistachio (dots & CTAs) */
        'brand-pistachio-light': '#C5DC50',
        'brand-pistachio-dark':  '#7BA320',
        'brand-blue':       '#00358E',   /* navy (immo) */
        'brand-blue-light': '#1A4FBE',
        /* ── Legacy aliases (used in component classes) ── */
        'gold':          '#A5D232',   /* pistachio replaces gold */
        'green-primary': '#06733D',
        'green-dark':    '#020f05',
        'green-forest':  '#031a0c',
        'green-light':   '#A5D232',
        'green-accent':  '#0AAE3D',
        /* ── Neutral ── */
        'beige':        '#F5EDD8',
        'beige-dark':   '#E8DCC8',
        'sand':         '#D4C4A0',
        'off-white':    '#FAFAF8',
        'anthracite':   '#1A1A2E',
        'charcoal':     '#2C2C3E',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'inter':    ['Inter', 'system-ui', 'sans-serif'],
        'nunito':   ['Nunito', '"Arial Rounded MT Bold"', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in-up':   'fadeInUp 0.8s ease forwards',
        'pulse-brand':  'pulseBrand 2.5s infinite',
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 3s infinite',
      },
      keyframes: {
        fadeInUp:   { '0%': { opacity:'0', transform:'translateY(30px)' }, '100%': { opacity:'1', transform:'translateY(0)' } },
        pulseBrand: { '0%,100%': { boxShadow:'0 0 0 0 rgba(165,210,50,0.5)' }, '50%': { boxShadow:'0 0 0 18px rgba(165,210,50,0)' } },
        float:      { '0%,100%': { transform:'translateY(0px)' }, '50%': { transform:'translateY(-12px)' } },
        shimmer:    { '0%': { backgroundPosition:'-200% center' }, '100%': { backgroundPosition:'200% center' } },
      },
    },
  },
  plugins: [],
}
