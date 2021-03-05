module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        mdfull:
          "2px 4px 20px -1px rgba(0, 0, 0, 0.03), -1px -2px 20px -1px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  variants: {
    extend: {},
    opacity: ({ after }) => after(["disabled"]),
    textColor: ({ after }) => after(["disabled"]),
    cursor: ({ after }) => after(["disabled"]),
    backgroundColor: ({ after }) => after(["disabled"]),
  },
  plugins: [],
};
