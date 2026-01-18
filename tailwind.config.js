export default {
  content: ["./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--text-primary-color) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
