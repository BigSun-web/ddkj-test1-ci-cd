import styles from './index.less';
import { request,useRequest } from 'umi';
import {Button} from 'antd'

export default function IndexPage(props) {
    //request 方式
    let getData = async()=>{
      let res = await request('/api/getData')
      console.log(res);
    }

    // useRequest  要求必须返回一个data字段,可以在config中设置
    // const {data,error,loading} = useRequest('/api/getData')


    // 线上地址请求     直接访问
    // const {data,error,loading} = useRequest(
    //   'https://api.zhuishushenqi.com/book/57206c3539a913ad65d35c7b'
    // )

    //线上地址请求     通过配置反向代理
    const {data,error,loading} = useRequest('/book/57206c3539a913ad65d35c7b')

    if(loading){
      return <div>loading....</div>
    }
    if(error){
      return <div>错误信息{error}</div>
    }

  return (
    <div>
      <h1 className={styles.title}>
        Page index&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button type='primary' onClick={()=>{getData()}}>使用request获取数据</Button>
        <div>Data数据:{JSON.stringify(data)}</div>
        {props.children}
      </h1>
    </div>
  );
}
