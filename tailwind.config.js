/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
      backgroundImage: {
        gradientText:
          "linear-gradient(89.91deg, rgba(174, 103, 250, 1), rgba(244, 152, 103, 1))",

        gradientNavBar:
          "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 100%)",
      },

      colors: {
        colorBg: "#040C18",
        colorFooter: "#031B34",
        colorBlog: "#042C54",
        colorText: "#81AFDD",
        colorSubText: "#FF8A71",
      },

      animation: {
        scaleup: "scaleup 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },

      keyframes: {
        scaleup: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
