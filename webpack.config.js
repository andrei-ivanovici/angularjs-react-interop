const webpack = require("webpack");
const glob = require('glob');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const templateLoader = require.resolve("./src/infra/template-loader.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
debugger;
const files =
    [
        ...glob.sync("./src/app/**/*.js", {
            ignore: [
                "./src/app/**/vendor.js",
                "./src/app/**/app.js",
            ]
        }),
        "./src/app/app.js"
    ];


console.log(files);

module.exports = {
    mode: "development",
    devtool: false,
    entry: {
        vendor: "./src/vendor.js",
        react :'./src/app/react-angular/react-angular.tsx',
        app: files,
        styles: './src/style.css'

    },

    module: {
        rules: [{
            test: /\.js$/,
            use: templateLoader

        },
            {
                test: /\.html$/,
                use: ['raw-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            ng: ["angular"],

        }),
        new HtmlWebpackPlugin({
            template: "./src/app/index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};
