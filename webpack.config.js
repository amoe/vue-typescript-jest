var path = require('path')
var webpack = require('webpack')
const loadDefinitions = require('./build/load-definitions');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/entry.ts',
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            // BEGIN rules needed for element-ui
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
            // END rules needed for element-ui
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue']
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 49152,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api": ""}
            }
        },
        // Force the dev server to serve the index XHTML page
        historyApiFallback: {
            index: 'index.xhtml'
        }
    },
    plugins: [
        new webpack.DefinePlugin(loadDefinitions()),
        new VueLoaderPlugin()
    ],
    // Because most apps using this template are desktop-focused, we don't
    // bother about the code-splitting configuration, which increases internal
    // complexity considerably.
    //
    // Set performance hints to true if building for mobile, and you'll need to
    // modify this configuration a lot to set up code-splitting.
    // 
    // <https://github.com/webpack/webpack/issues/3216>
    performance: {
        hints: false
    }
}
