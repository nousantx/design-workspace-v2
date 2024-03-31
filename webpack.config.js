const path = require("path");

module.exports = {
  entry: {
    bundle: [
      "./src/js/color.js",
      "./src/js/downloader.js",
      "./src/js/style.js",
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
