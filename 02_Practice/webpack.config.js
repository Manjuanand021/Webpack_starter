//Reference - https://www.youtube.com/watch?v=Y5ysGRK8KKA

var path = require('path');
var optimize = require('webpack').optimize;
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        //Tell all the loaders to append to all the urls they create 
        publicPath: 'build/'
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
        new optimize.UglifyJsPlugin()
    ]
}