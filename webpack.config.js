const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/script.js",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My Webpack App",
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  cache: false
}