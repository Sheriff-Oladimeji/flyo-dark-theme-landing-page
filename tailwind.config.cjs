/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        mobile: "url('./assets/bg-curvy-mobile.svg')",
        desktop: "url('./assets/bg-curvy-desktop.svg')",
      },

      colors: {
        DarkBlueIntro: "hsl(217, 28%, 15%)",
        DarkBlueMain: "hsl(218, 28%, 13%)",
        DarkBlueFooter: "hsl(216, 53%, 9%)",
        DarkBlueTestimonials: "hsl(219, 30%, 18%)",
        White: "hsl(0, 0%, 100%)",
        LightRed: "hsl(0, 100%, 63%)",
        Blue: "hsl(198, 60%, 50%)",
        Cyan: "hsl(176, 68%, 64%)",
      },
      fontFamily: {
        body: ["Open Sans", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
