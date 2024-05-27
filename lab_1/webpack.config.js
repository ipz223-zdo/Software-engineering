const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    output: {
        path: path.resolve(__dirname, 'src/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
