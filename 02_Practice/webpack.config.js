//Reference - https://www.youtube.com/watch?v=Y5ysGRK8KKA

var path = require('path'),
    optimize = require('webpack').optimize,
    htmlWebpackPlugin = require('html-webpack-plugin'),
    visualizer = require('webpack-visualizer-plugin');

module.exports = {
    entry: {
        bundle: './app/index.js',
        vendor: ['jquery']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        //Chunkhash helps with cache bursting
        //Everytime if there are file changes, webpack changes chunkhash - 16 digit postfix to bundled file
        filename: '[name].[hash].js',
        //Tell all the loaders to append to all the urls they create 
        // publicPath: 'build/' --Commenting this line because we are copying index.html in build folder, 
        //so whatever we refere in index.html file will be in same directory
    },
    //Loaders are more like preprocessors - transforms modules before webpack creates bundle
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/
            },
            // {
            //     test: /\.jpg$/,
            //     use: [
            //         {
            //             //Loaders run from bottom to top or from right to left
            //             //Image-loader runs first and then url-loader
            //             loader: 'url-loader',
            //             //Any image file larger than 25kb will be included in index.html as file depenedency
            //             //or else it will be included as data uri with bundled js file - including in bundle helps reduce http reques for image
            //             options: {
            //                 limit: 25000
            //             }
            //         },
            //         'image-webpack-loader'
            //     ]
            // }
        ]
    },
    //Plugins are post-processors, run on created bundle
    plugins: [
        new optimize.UglifyJsPlugin(),
        //Common vendor code chunk is moved to vendor.js file
        //Without this plugin we will have vendor code both in bundle.js and vendor.js
        new optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new htmlWebpackPlugin({
            template: './index.html'
        }),
        new visualizer()
    ]
}