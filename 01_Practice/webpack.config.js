var HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var isProd = process.env.NODE_ENV === 'production';
var cssConfigDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssConfigProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    //resolve-url-loader may be chained before sass-loader if necessary
    use: ['css-loader', 'sass-loader']
})
var cssConfig = isProd ? cssConfigProd : cssConfigDev;

module.exports = {
    entry: {
        app: './app/app.js',
        contact: './app/contact.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfigProd
            }
        ]
    },
    devServer: {
        //Serve files from contentBase
        contentBase: path.join(__dirname, 'build'),
        //gzip compression
        compress: true,
        //Show errors only on console   
        stats: 'errors-only',
        port: 3000,
        //open file in new window
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorial',
            hash: true,
            template: './app/index.html',
            excludeChunks: ['contact']
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Tutorial',
            hash: true,
            filename: 'contact.html',
            template: './app/contact.html',
            chunks: ['contact']
        }),
        new ExtractTextPlugin({
            filename: "bundle.css",
            disable: false,
            allChunks: true
        })
    ]
}