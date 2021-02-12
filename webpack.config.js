let mode = 'development';

if(process.env.NODE_ENV === "production"){
       mode = "production";
}

module.exports ={
    mode: mode,
    devtool: "source-map",
    devServer:{
        contentBase: './dist'
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use:[
                    {loader: 'babel-loader',}
                ]
            },
        ],
    },
}