export default {
    // namespace:'global', //所有models里面的namespace不能重名

    //初始化全局数据
    state:{
        title: '全局 title',
        text: '全局text',
        login: false,
        a: '全局 models aaaa',
    },

    //处理同步业务
    reducers:{
        setText(state){
            //copy更新并返回
            return {
                ...state,
                text:'全局设置 后的text'+Math.random().toFixed(2)
            }
        },

        setTitle(state,action){
            //action接收到的参数
            return{
                ...state,
                title:`全局设置 后的title${action.payload.a}/${action.payload.b}`
            }
        },

        signin:(state)=>({
            ...state,
            login:true
        })
    }
}