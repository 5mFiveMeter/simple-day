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
    let req_user = ctx.request.body
    let UserModel = mongoose.model("User")
    let newUser = new UserModel({
        user_name:req_user.user_name,
        user_password:req_user.password,
        user_email:req_user.user_email,
        user_weixin:req_user.user_weixin
    })
    await UserModel.findOne({user_name:req_user.user_name}).then(async (result)=>{
        if(result){
            ctx.body = {
                code:200,
                message:"用户已存在"
            }
        }else{
            await newUser.save().then(result=>{
                ctx.body = {
                    code:200,
                    message:"注册成功",
                    user_data:ctx.request.body
                }
            }).catch(err=>{
                ctx.body = {
                    code:200,
                    message:"注册未知错误"
                }
            })
        }
    }).catch(err=>{
        ctx.body = {
            code:200,
            message:"未知错误"
        }
    })
})

module.exports = router