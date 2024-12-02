import { connect } from 'umi'

export default connect((state) => ({
    //抓取全局数据，可以重命名
    text:state.global.text,
    title:state.global.title,
    A:state.global.a,
    isLogin:state.global.login
}))(function dva1(props) {
    return (
        <div>
            <h1>dva1</h1>

            <h3>获取全局数据</h3>

            <div>text:{props.text}</div>
            <div>title:{props.title}</div>
            <div>a:{props.A}</div>
            {props.isLogin ? <div>已登陆</div>:<div>未登录</div>}

            <h3>修改全局数据</h3>
            <button
            onClick={()=>{
                props.dispatch({
                    type:'global/setText'
                })
            }}
            >
            修改全局text,不传参
            </button>

        </div>
    )
})
