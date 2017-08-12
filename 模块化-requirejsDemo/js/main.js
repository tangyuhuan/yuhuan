
requirejs.config({
        baseUrl:'./js',
        paths:{
            jquery:'./lib/jquery'
        }        
    });

    //加载入口模块
    requirejs(['app/index']);