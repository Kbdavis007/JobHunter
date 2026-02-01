const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: { port: 3001 },
  output: { publicPath: "http://localhost:3001/" },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  resolve: { extensions: [".js", ".jsx"] },
  plugins: [
    new ModuleFederationPlugin({
      name: "tracker",
      filename: "remoteEntry.js",
      exposes: { "./TrackerElement": "./src/tracker-element.js" },
      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true }
      }
    })
  ]
};
