const path = require('path')

const NODE_ENV = process.env.NODE_ENV


module.exports = {
    mode: NODE_ENV ? NODE_ENV : 'development',

    entry: path.resolve(__dirname, '../src/client/index.jsx'),

    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
    },

    resolve: {
        extensions: ['.js', '.json', '.css', '.ts', '.jsx']
    },

    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                },
            }
        }],
    },
}