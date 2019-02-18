var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: false,
    entry: {
        'imgpen-example.js': path.resolve(__dirname, 'src/imgpen-example.ts'),
        'imgpen-example.css': path.resolve(__dirname, 'src/imgpen-example.scss'),
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'www')
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            onlyCompileBundledFiles: true,
                            compilerOptions: {
                                noEmit: false
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['.ts', '.js']
    },
    plugins: [
        new ExtractTextPlugin("[name]"),
    ]
};