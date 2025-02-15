import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0070f3',
        secondary: '#21c55d',
        accent: '#f97316',
        background: '#f3f4f6',
        'text-primary': '#1f2937'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom, rgba(243, 244, 246, 0.8), rgba(243, 244, 246, 0.9)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')"
      }
    }
  },
  plugins: []
}