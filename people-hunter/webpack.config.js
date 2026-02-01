const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  devServer: { port: 3002 },
  output: { publicPath: "http://localhost:3002/", uniqueName: "peoplehunter" },
  resolve: { extensions: [".ts", ".js"] },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", options: { transpileOnly: true } }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "peoplehunter",
      filename: "remoteEntry.js",
      exposes: { "./PeopleHunterElement": "./src/people-hunter-element.ts" }
    })
  ]
};
