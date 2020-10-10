const mode = process.env.NODE_ENV;
const dev = mode === "development";

const rest = dev ? [] : [require("autoprefixer"), require("cssnano")];

module.exports = {
  plugins: [require("postcss-import"), require("tailwindcss"), ...rest],
};
