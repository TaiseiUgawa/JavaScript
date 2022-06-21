const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserJSPlugin = require('terser-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.(sass|scss)$/, 
            use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader',]
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
        }    

        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: 'style.css',
    })],
    optimization: {
        minimizer: [new TerserJSPlugin({}),
          new CssMinimizerPlugin({}),
        ],
    },
};