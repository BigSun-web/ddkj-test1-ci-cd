import React,{useState} from 'react'
import '../css/login.css'
import { Input,Button } from 'antd';
import {history,useRequest,request} from 'umi'
export default function login() {
  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')

  //fetch 方式
  // const login = async()=>{
  //   let res = await fetch('/api/login',{
  //     method:'post',
  //     headers:{'Content-type':'application/x-www-form-urlencoded'},//请求头
  //     body:`username=${value1}&password=${value2}`
  //   })
  //   let data = await res.json()
  //   console.log(data);
    
  //   if(data.code===200){
  //     sessionStorage.setItem('isLogin',JSON.stringify({username:value1,password:value2}))
  //     history.push('/')
  //   }
  // }

  // request 方式
  const login = async()=>{
    let res = await request('/api/login',{
      method:'post',
      data:{
        username:'admin',
        password:'123456'
      }
    })
    if(res.code === 200){
      sessionStorage.setItem('isLogin',JSON.stringify({username:value1,password:value2}))
      history.push('/')
    }
  }


  // useRequest 方式
  // const {data,error,loading,run} = useRequest({
  //   url:'/api/login',
  //   method:'post',
  //   data:{
  //     username:value1,
  //     password:value2
  //   }
  // },{
  //   manual:true, // 手动触发run来调用
  // })
  // console.log('123');
  
  // if(data?.code === 200){
  //   sessionStorage.setItem('isLogin',JSON.stringify({username:value1,password:value2}))
  //   history.push('/')
  // }



  return (
    <div className='L_main'>
      <div className='L_center'>
        <Input placeholder="Basic usage" value={value1} onChange={(e)=>{setValue1(e.target.value)}} />
        <Input placeholder="Basic usage" type='password' value={value2} onChange={(e)=>{setValue2(e.target.value)}} />
        <Button onClick={()=>{login()}}>登录</Button>
        {/* <Button onClick={()=>{run()}}>登录</Button> */}
      </div>
    </div>
  )
}
