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
            message:"查询留言成功",
            data:result
        }
    })
})

router.post("/add_self_message_content",async (ctx)=>{
    // console.log(ctx.request)
    // console.log(ctx.request.body)
    var postObj = ctx.request.body
    var tempObj = {
        user_name:postObj.user_name,
        create_time:postObj.create_time,
        message_type:postObj.message_type,
        message_content:postObj.message_content
    }
    let SelfMessageModel = mongoose.model("SelfMessage")
    let newMessage = new SelfMessageModel(tempObj)
    await newMessage.save().then(res=>{
        ctx.body = {
            code:200,
            message:"添加留言成功"
        }
    }).catch(err=>{
        new Error(err)
    })
})


module.exports = router