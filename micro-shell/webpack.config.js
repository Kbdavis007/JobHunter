const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3000 },
  output: { publicPath: "http://localhost:3000/" },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        tracker: "tracker@http://localhost:3001/remoteEntry.js",
        peoplehunter: "peoplehunter@http://localhost:3002/remoteEntry.js"
      }
    }),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
};
