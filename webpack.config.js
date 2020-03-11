const HtmlWebPackPlugin = require("html-webpack-plugin");
const _ = require("lodash");

const prodConf = {
  name: "prod",
  mode: "production",
  target: "electron-renderer",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};

const devConf = _.cloneDeep(prodConf);
devConf.name = "dev";
devConf.mode = "development";
devConf.watch = true;

module.exports = [prodConf, devConf]