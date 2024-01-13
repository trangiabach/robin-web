import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [{
      robinTheme: {
        "primary": "rgba(126, 174, 120, 1)",
        "secondary": "rgba(42, 63, 46, 1)",
        "accent": "rgba(126, 174, 120, 0.3)"
      }
    }],

  }
}
export default config
