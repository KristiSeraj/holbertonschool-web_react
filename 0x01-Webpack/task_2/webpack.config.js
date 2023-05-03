const path = require("path");

module.exports = {
  entry: "./js/dashboard_main.js",
  mode: 'production',
  performance: {
    maxAssetSize: 1000000,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(jpg|gif|png|jpeg|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            }
          }
        ]
      }
    ]
  }
};

