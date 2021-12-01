module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        play: "/src/assets/Play.png",
        Pause: "./src/assets/Pause.png",
        Stop: "./src/assets/Stop.png",
        next: "./src/assets/next.png",
        back: "./src/assets/back.png",
        login: "./src/assets/login.png",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
