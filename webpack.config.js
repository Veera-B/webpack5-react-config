
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
    module:{
        rules:[
            {
                test: /\.(s[ac]|c)ss$/i,//(s|c)starts with s OR c [ac] means either a or c after s
                use:[MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"],
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
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: [ ".js",".jsx"]
    },
}