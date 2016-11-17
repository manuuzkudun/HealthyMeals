const path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./entry.js",
  output: {
    path: path.join(__dirname, "assets"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        exclude:'/node_modules',
        loader:'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
