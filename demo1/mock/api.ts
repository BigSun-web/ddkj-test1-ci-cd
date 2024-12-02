export default {
    'POST /api/login':(req,res)=>{
        const {username,password} = req.body
        console.log(username,password,'11111111111111');
        
        if(username === 'admin' && password === '123456'){
            res.send({
                code:200,
                token:'token 123456'
            })
        }else{
            res.send({
                code:401,
                msg:'登录失败'
            })
        }
    },
    'GET /api/getData':(req,res)=>{
        res.send({
            code:200,
            data:[
                {id:1,name:'张三',age:15},
                {id:2,name:'李四',age:16},
                {id:3,name:'王五',age:17},
                {id:4,name:'赵六',age:18},
                {id:5,name:'钱七',age:19},
                {id:6,name:'孙八',age:20},
                {id:7,name:'周九',age:21},
                {id:8,name:'吴十',age:22},
                {id:9,name:'郑十一',age:23},
                {id:10,name:'王十二',age:24},
                {id:11,name:'冯十三',age:25},
                {id:12,name:'陈十四',age:26},
                {id:13,name:'褚十五',age:27},
                {id:14,name:'卫十六',age:28},
                {id:15,name:'蒋十七',age:29},
                {id:16,name:'沈十八',age:30},
                {id:17,name:'韩十九',age:31},
                {id:18,name:'杨二十',age:32}
            ]
        })
    }
}