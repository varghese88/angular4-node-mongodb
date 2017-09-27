const webpack = require("webpack");
const path = require("path");
const config = {
    entry:{
        'app':'./src/app.ts',
        'vendor':'./src/vendor.ts',
        'polyfills':'./src/polyfills.ts'
    },
    devtool:'inline-source-map',
    output:{
        path:path.resolve(__dirname + 'dist'),
        filename:'[name].js'
    },
    resolve:{
        extensions:['.ts','.scss','.js','.css']
    },
    watch:true,
    module:{
        loaders: [
        { test:/\.ts$/, loaders:['awesome-typescript-loader','angular2-template-loader']},
        { test: /\.html$/, loader: 'raw-loader'},
        { test: [/\.scss$/,/\.css$/], use: ['style-loader','css-loader','sass-loader']},
        { test: /\.(gif|png|jpe?g)$/i, loader: 'file-loader?name=dist/images/[name].[ext]' },
        { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      ]
    },
    plugins:[
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, './src')
        ),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            options: {
                htmlLoader: {
                    minimize: true,
                    removeAttributeQuotes: false,
                    caseSensitive: true,
                    customAttrSurround: [
                    [/#/, /(?:)/],
                    [/\*/, /(?:)/],
                    [/\[?\(?/, /(?:)/]
                    ],
                    customAttrAssign: [/\)?\]?=/]
                },
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
module.exports = config;