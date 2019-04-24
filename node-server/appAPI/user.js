const Router = require("koa-router")
const mongoose = require("mongoose")

let router = new Router()

router.get("/",async (ctx)=>{
    ctx.body = {
        code:200,
        message:"用户接口接通"
    }
})

router.post("/login",async (ctx)=>{
    let login_user = ctx.request.body
    let user_name = login_user.userName
    let user_password = login_user.password
    //请求数据库
    let UserModel = mongoose.model("User")
    await UserModel.findOne({user_name:user_name}).exec().then(async(result)=>{
        let User = new UserModel()
        if(result){
            await User.comparePassword(user_password,result.user_password)
            .then(()=>{
                ctx.body = {
                    code:200,
                    message:"登录成功",
                    user_data:result
                }
            })
            .catch(error=>{
                ctx.body = {
                    code:200,
                    message:"密码错误"
                }
            })
        }else{
            ctx.body = {
                code:200,
                message:"用户不存在"
            }
        }
    })

    
})

router.post("/register",async (ctx)=>{
    ctx.body = {
        code:200,
        message:"注册接口接通"
    }
})

module.exports = router