/** @type {import('tailwindcss').Config} */
module.exports = {
  // corePlugins: {
  //   variants: ["responsive", "variants"],
  // },
  // theme: {
  //   extend: {
  //     spacing: {
  //       8: "2rem", // تحديد القيمة المطلوبة لـ 'xs:p-8'
  //     },
  //   },
  // },
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        // ...
      },
    },
  },
  plugins: [],
};
