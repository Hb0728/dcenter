module.exports={
    publicPath: './',
    
    chainWebpack: config =>{
        config.plugin('html').tap(args => {
            args[0].title = '天天文库-文档管理中心';
            return args;
        })
      },
}
