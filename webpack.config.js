const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const fs = require('fs');
const HtmlWebPackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

const env = process.env.NODE_ENV;

const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

const host = process.env.HOST || 'localhost';

module.exports = {
    entry: path.join(__dirname,'src','main.js'),
    mode: 'development',
    output: {
        publicPath: '/',
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    optimization: {
        splitChunks:{
            // Must be specified for HtmlWebpackPlugin to work correctly.
            // See: https://github.com/jantimon/html-webpack-plugin/issues/882
            chunks: 'all',
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, 'src')],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({
            filename: path.join(__dirname, 'dist', 'index.html'),
            template: path.join(__dirname, 'public', 'index.html'),
            inject: true,
        }),
    ],
    devServer: {
        contentBase: resolveAppPath('public'),
        compress: true,
        hot: true,
        host,
        port: 3000,
        publicPath: '/',
    },
};
