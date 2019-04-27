const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, 'src/web'),
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.(html|png|jpe?g|json)$/,
                loader: 'file-loader',
                options: {
                    name(file) {
                        return '[path][name].[ext]';
                    },
                },
            },
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/web'),
    },
    entry: {
        index: ['./index.ts', './index.scss', './index.html'],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
};