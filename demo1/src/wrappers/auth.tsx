import {Redirect} from 'umi'
export default function Auth(props: any){
    console.log(props);
    
    const isLogin = sessionStorage.getItem('isLogin')
    if(isLogin){
        return <div>{props.children}</div>
    }else{
        return <Redirect to="/login"/>
    }
}