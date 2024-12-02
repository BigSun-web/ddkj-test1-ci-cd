import { defineConfig } from 'umi';
import routes from './router/routes'
import proxy from './proxy'

export default defineConfig({
  proxy,//引用反向代理
  request:{     //通过设置request 中的 dataField 可以修改返回数据的字段
    dataField:''     //为空就是不限制
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  //快速刷新
  fastRefresh:{},
  //msfu配置 热更新
  mfsu:{},
  //layout基本布局
  layout:{
    //后台标题
    name:"后台管理系统",
    logo:"https://tse4-mm.cn.bing.net/th/id/OIP-C.2bhwFz2HSpuzaGdDYKBKngHaHa?w=209&h=208&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    locale:true, //layout是否支持国际化插件
  },
  //国际化
  locale:{
    default:"zh-CN",//默认语言包
    antd:true,//是否使用antd的国际化插件
  },
});
