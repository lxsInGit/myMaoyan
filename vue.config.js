module.exports = {
    // publicPath: './',
    devServer: {
        proxy: {
            "/api": {
                target: "http://m.maoyan.com",
                changeOrigin: true,
                pathRewrite: {  //重写路径(删掉/api)
                    '^/api': ''
                }
            }
        }
    }
}