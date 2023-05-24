/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["estedad"],
      },
      fontWeight: {
        "extra-light": 100,
        "extra-bold": 800,
        regular: 400,
      },
      colors: {
        "tint-1": "#E5F2E9",
        "tint-2": "#CAE4D3",
        "tint-3": "#B0D7BD",
        "tint-4": "#96C9A7",
        "tint-5": "#7CBC91",
        "tint-6": "#61AE7B",
        "tint-7": "#4E9968",
        Primary: "#417F56",
        "shade-1": "#396F4B",
        "shade-2": "#315F41",
        "shade-3": "#294F36",
        "shade-4": "#21402B",
        "shade-5": "#183020",
        "shade-6": "#102016",
        "shade-7": "#08100B",
        white: "#FFFFFF",
        "gray-1": "#F9F9F9",
        "gray-2": "#E1E1E1",
        "gray-3": "#EDEDED",
        "gray-4": "#CBCBCB",
        "gray-5": "#ADADAD",
        "gray-6": "#757575",
        "gray-7": "#717171",
        "gray-8": "#353535",
        black: "#0C0C0C",
        error: "#C30000",
        "error-light": "#ED2E2E",
        "error-extra-light": "#FFF2F2",
        success: "#00966D",
        "success-light": "#00BA88",
        "success-extra-light": "#F3FDFA",
        warning: "#A9791C",
        "warning-light": "#F4B740",
        "warning-extra-light": "#FFF8E1",
      },
      boxShadow: {
        "shadow-2": "0px 2px 2px rgba(0, 0, 0, 0.25)",
        "shadow-4": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "shadow-6": "0px 6px 6px rgba(0, 0, 0, 0.25)",
        "shadow-8": "0px 8px 8px rgba(0, 0, 0, 0.25)",
        "shadow-12": "0px 12px 12px rgba(0, 0, 0, 0.25)",
        "shadow-16": "0px 16px 16px rgba(0, 0, 0, 0.25)",
        "card-shadow":
          "0px 16px 6px rgba(0, 0, 0, 0.01), 0px 9px 5px rgba(0, 0, 0, 0.05), 0px 4px 4px rgba(0, 0, 0, 0.09), 0px 1px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
        "content-card-shadow":
          "0px 42px 17px rgba(0, 0, 0, 0.01), 0px 24px 14px rgba(0, 0, 0, 0.05), 0px 11px 11px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "hero-slider":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), linear-gradient(0deg, rgba(33, 64, 43, 0.5), rgba(33, 64, 43, 0.5)), url(/src/assets/image/slider.webp)",
        "summery-img":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/src/assets/image/summery.webp)",
        "footer-img":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(/src/assets/image/footer.webp)",
      },
      keyframes: {
        leftToRight: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        reverseLeftToRight: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(0)", opacity: "0" },
          "50%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(100%)", opacity: "1" },
        },
        reverseRightToLaft: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" },
        },
      },
      animation: {
        rightToLaft: "rightToLaft .5s linear 1",
        reverseRightToLaft: "reverseRightToLaft .5s linear 1",
        leftToRight: "leftToRight .5s linear 1",
        reverseLeftToRight: "reverseLeftToRight .5s linear 1",
      },
    },
  },
  plugins: [],
};
