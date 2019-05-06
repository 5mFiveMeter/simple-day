const Router = require("koa-router")
const mongoose = require("mongoose")

let router = new Router()

router.get("/",async (ctx)=>{
    ctx.body = {
        code:200,
        message:"个人留言接通"
    }
})

router.get("/get_self_message_content",async (ctx)=>{
    let user_name = ctx.query.user_name
    let SelfModel = mongoose.model("SelfMessage")
    await SelfModel.find({user_name:user_name}).then(result=>{
        ctx.body = {
            code:200,
            message:"查询个人留言成功",
            data:result
        }
    })
})

router.post("/add_self_message_content",async (ctx)=>{
    console.log(ctx)
    ctx.body = {
        code:200,
        message:"添加个人留言成功"
    }
})


module.exports = router