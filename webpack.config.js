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
        test:/\.(js|jsx)$/,
        exclude:'/node_modules',
        loader:'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
    ]
  }
}
