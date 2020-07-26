var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["./src/app.js",
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3001",
    "webpack/hot/only-dev-server"
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader"
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['source-map-loader'],
      },
      {
        test: /test\.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/,
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    publicPath: "/",
    port: 3001,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};