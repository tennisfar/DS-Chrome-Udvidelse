const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    background: './src/background.js',
    content: './src/content.js',
    popup: './src/popup/popup.js', // Your popup script
    // Define other entries if necessary, e.g., background: './src/background.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // This will output popup.js, background.js, etc.
  },
  devtool: 'inline-source-map', // Useful for debugging, adjust as needed
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files
        exclude: /node_modules/, // except those in node_modules
        use: {
          loader: 'babel-loader', // Use Babel to transpile ES6/JSX to ES5
          options: {
            presets: ['@babel/preset-env'], // Preset for compiling ES6
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extracts CSS into separate files
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
      // You can add more loaders here for other types of files, like CSS or images
    ],
  },
  // Optional: Configure Webpack to automatically copy your popup HTML file to the dist directory
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new (require('copy-webpack-plugin'))({
      patterns: [
        { from: 'src/popup/index.html', to: 'popup.html' }, // Adjust source and destination paths as needed
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/ContentScripts/DS/inject-ds-config.js',
          to: 'inject-ds-config.js'
        }
      ]
    })
  ],
};
