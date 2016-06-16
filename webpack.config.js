module.exports = {

    entry: "./js/entry.js",
    output: {
        path: "dist/js/page",
        publicPath: "dist/js/page/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
            {test: /\.png|gif$/, loader: "file-loader?name=img/[hash:8].[name].[ext]"},
            {test: /\.vue$/, loader: 'vue'}
        ]
    },
    watch: true
};
