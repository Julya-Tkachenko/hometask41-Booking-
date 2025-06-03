const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const CopyPlugin = require("copy-webpack-plugin");
 

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[fullhash].js',
        clean: true,
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new CssPlugin({
            filename: 'style[fullhash].css'
        }),
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            process: 'process/browser.js',
        }),
        new CopyPlugin({
            patterns: [
                { from: "static", to: "static" },
            ],
        }),
    ],
    devServer: {
        port: 5500,
        static: {
            directory: path.join(__dirname, 'build')
        },
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: true
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    CssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin()
        ]
    },
    resolve: {
        fallback: {
          process: require.resolve("process/browser"),
          buffer: require.resolve("buffer/") // Додатково для повної підтримки Buffer
        },
    },
};

