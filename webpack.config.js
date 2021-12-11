const path = require('path');

module.exports = {
    entry: './ts/index.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                exclude: ["/node_modules/", "/spec/"],
                loader: 'babel-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
}