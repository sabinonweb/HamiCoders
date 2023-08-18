/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeBgPrimary: "#0e1217",
        themeBgSecondary: "#1c1f26",
        themeBgTertiary: "#17191f;",
        themeBgNotification: "#2d313a",
        themeDividerPrimary: "#a8b3cf",
        themeDividerSecondary: "#a8b3cf66",
        themeDividerTertiary: "#a8b3cf33",
        themeDividerQuaternary: "#a8b3cf14",
        themeButtonActive: "#a8b3cf33",
        themeFloat: "#a8b3cf14",
        themeLabelPrimary: "#fff",
        themeLabelSeconday: "#cfd6e6",
        themeLabelTertiary: "#a8b3cf",
        themeLabelQuard: "#a8b3cfa3",
        themeGreenButton : "#39e58c",
        themeOrangeButton : "#ff9470",
        themePurpleButton : "#ce3df3",
      },
    },
  },
  plugins: [],
};
