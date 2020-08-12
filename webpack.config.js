const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        bundle: "./src/script.js",
        player: "./src/playerlist.js",
        viewplayer: "./src/view-player.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html",
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: "./src/first-team.html",
            filename: "first-team.html",
            chunks: ['subpage']
        })
    ]


}