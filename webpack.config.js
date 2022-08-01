const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    entry: ['@babel/polyfill' ,'./src/index.js'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new HTMLWebpackPlugin({template: './public/index.html', minify: {collapseWhitespace: isProd}}), 
                new CleanWebpackPlugin(),
                new CopyWebpackPlugin(
                    { 
                        patterns: [
                            {
                                from: path.resolve(__dirname, './public/favicon.ico'), 
                                to: path.resolve(__dirname, 'dist/public')},
                            { 
                                from: path.resolve(__dirname, './public/manifest.json'), 
                                to: path.resolve(__dirname, 'dist/public') 
                            }
                        ]
                    }
                )
            ],
    resolve: {
        extensions: ['.js', '.jsx', '.png', '.jpg', '.svg']
    },
    optimization: {
        minimizer: [new TerserWebpackPlugin(),
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [['mozjpeg', { quality: 60 ,maxMemory: 150 }], ["optipng", { optimizationLevel: 5 }]]
                    }
                }
            })]
    },
    module: {
        rules: [
            {
                test: /\.(png|svg)$/, 
                loader: 'file-loader',
                options: {
                    outputPath: 'icons'
                }
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'backgrounds'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env' ,'@babel/preset-react']
                    }
                }
            }
        ]
    }
}