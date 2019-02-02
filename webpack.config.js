var path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        src: path.resolve(__dirname, "./src/index.js")
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
