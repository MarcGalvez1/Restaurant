const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development", // or 'production' or 'none'
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
