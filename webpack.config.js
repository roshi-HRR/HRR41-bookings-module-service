const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'booking.bundle.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/,
        use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    },
  ]
  }
};