const path = require('path');
// const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules›/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ],
    },
    // plugins: [
    //     new HtmlWebPackPlugin({
    //         template: "./public/index.html",
    //         filename: "./index.html"
    //     })
    // ]
};