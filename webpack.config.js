const path = require("path");

module.exports = {
  entry: ["./src/js/props.js", "./src/js/styles.js", "./src/js/color.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "styles.bundle.js",
  },
  devtool: "source-map",
};
