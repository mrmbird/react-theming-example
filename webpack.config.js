const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index"),
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, "src"),
        use: ["babel-loader"],
      },
      {
        test: /\.(jpg|jpeg|svg|png|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", //source html
    }),
  ],
};
