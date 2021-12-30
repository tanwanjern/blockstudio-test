module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
           sm: "640px",
           md: "768px",
           lg: "1024px",
           xl: "1140px",
           '2xl': "1280px"
        }
      },
    },
  },
  plugins: [],
}
