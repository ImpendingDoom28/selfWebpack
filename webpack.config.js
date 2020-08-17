const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config
}
const babelOptions = (preset) => {
    const config = {
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env',
            ],
            plugins: [
                '@babel/plugin-proposal-class-properties'
            ]
        }
    }

    if (preset) {
        config.options.presets.push(preset);
    }

    // console.log("Config for babel-loader:", config);

    return config
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            }
        },
        'css-loader'
    ];

    if (extra) {
        loaders.push(extra);
    }

    return loaders;
}

module.exports = {
    context: path.join(__dirname, "app"),
    mode: 'development',
    entry: {
        // main: ['@babel/polyfill', './index.js']
        main: "./index.js",
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: '../public/index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: true
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ],
    //to split same imports from all files to another file, reducing the overall code duplication
    optimization: optimization(),
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    // Module of webpack
    module: {
        // Rules for loaders
        rules: [
            // Object, that describes the rules for specific loader
            // =====Loader for css=====
            {
                //RegExp for all css files
                test: /\.css$/,
                //css-loader add an ability for importing css into files.
                //style-loader adds css that we write to the <head> section in html.
                // =====LOADERS COME FROM RIGHT TO THE LEFT=====
                use: cssLoaders(),
            },
            // =====Loader for images=====
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            // =====Loader for fonts=====
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            // =====Babel loader=====
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: babelOptions('@babel/preset-react'),
            },
            // =====Babel loader for TypeScript=====
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: babelOptions('@babel/preset-typescript')
            },
            // =====Babel loader for React=====
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: babelOptions('@babel/preset-react')
            }
        ]
    },
    devServer: {
        port: 3000,
        hot: isDev
    }
}