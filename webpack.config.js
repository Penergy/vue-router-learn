module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                },
                exclude: /node_modules/
            },
            //解析VUE文件，vue最主要的就是用到了这个vue-loader，这才是解析vue文件的关键 
            //但是因为vue文件里面又包含有css和js，所以才用到了后面的几个loader 
            { test: /\.vue$/, loader: "vue-loader" },
            //解析css
            { test: /\.css$/, loader: "style!css" },
            //解析html
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}