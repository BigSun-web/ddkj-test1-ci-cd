export default {
    '/api':{
        //要代理的真实服务器地址
        target:'https://localhost:3000',
        //可以从http代理到https
        // https:true,
        //依赖origin的功能需要这个，比如cookie
        changeOrigin:true,
        pathRewrite:{'^/api':''}//路径替换
    },
    //线上服务器地址
    "/book":{
        target:'https://api.zhuishushenqi.com',
        changeOrigin:true,
    }
}