
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
let target = "web";

if(process.env.NODE_ENV === "production"){
       mode = "production";
       target = "browserslist";
}

module.exports ={
    mode: mode,
    devtool: "source-map",
    target: target,
    devServer:{
        contentBase: './dist',
        hot: true
    },
    output:{
        assetModuleFilename : "images/[hash]_[name]__[ext]",
    },
    module:{
        rules:[
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset',
                // parser:{
                //     dataUrlCondition:{
                //         maxSize: 30*500,
                //     }
                // }
                
            },
            {
                test: /\.(s[ac]|c)ss$/i,//(s|c)starts with s OR c [ac] means either a or c after s
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{publicPath : ""}
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use:[
                    {loader: 'babel-loader',}
                ]
            },
        ],
    },//module end
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'index.html'
        }),
    ],
    resolve: {
        extensions: [ ".js",".jsx"]
    },
}