const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js',
        article: './src/article.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: './index.html',
            chunks: ['main'],
            title: 'Main Page'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            filename: './article.html',
            chunks: ['article'],
            title: 'Article Page'
        }),
    ],
    devtool: 'cheap-module-eval-source-map'
};
