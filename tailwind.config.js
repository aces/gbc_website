/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,css}",
    "./main.js"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "colour-primary": "#3E3A37",
        "colour-primary-lighter": "#65615F",
        "colour-dark": "#3E3A37",
        "colour-dark-2": "#4E4A47",
        "colour-light": "#E5E1DB",
        "colour-secondary": "#00adee",
        "colour-2":"#a59a89",
        "colour-3":"#baac9a",
        "colour-4":"#ccbfad",
        "colour-accent": "#89A79A",
        "colour-neutral": "#E5E1DB",
        "colour-text-main": "#353535",

        "c-bg-l": "#eff1f8",
        "c-bg2-l": "#f4f5f7",
        "c-txt-l": "#393939",
        "c-fg1-l": "#ffffff",
        "c-fg2-l": "#a4b6c2",
        "c-fg3-l": "#00adee",
        "c-fg4-l": "#26C6DA",
        "c-h-l": "#582dd6",        

        "c-bg-d": "#ffffff",
        "c-bg2-d": "#f4f5f7",
        "c-txt-d": "#393939",
        "c-fg1-d": "#a4b6c2",
        "c-fg2-d": "#d0d0c4",
        "c-fg3-d": "#ea696b",
        "c-fg4-d": "#26C6DA",
        "c-h-d": "#582dd6",

      }
    },
    fontFamily: {
      sans: ['Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      commy: ['Arial']
    },
  },
}
