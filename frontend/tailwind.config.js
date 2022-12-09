module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      blur: {
        xs: "3px",
      },
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "3.5rem",
        full: "9999px",
        large: "12px",
      },
      width: {
        450: "450px",
        760: "760px",
        768: "768px",
        800: "800px",
        1024: "1024px",
        1280: "1280px",
        1400: "1400px",
      },
      height: {
        80: "80px",
        600: "600px",
        700: "700px",
        "80vh": "80vh",
        "85vh": "85vh",
        "88vh": "88vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern": "url('../src/data/welcome-bg.svg')",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1064px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        custom: "1320px",
        // => @media (min-width: 1320px) { ... }
        fullscreen: "1600px",
        // => @media (min-width: 1600px) {...}
      },
    },
  },
  plugins: [],
};
