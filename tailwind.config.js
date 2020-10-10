module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        "pale-yellow": "#F9F6D6",
      },
    },
  },
  variants: {},
  // https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
