const Router = require("koa-router")
const mongoose = require("mongoose")

let router = new Router()

router.get("/",async (ctx)=>{
    ctx.body = {
        code:200,
        message:"个人留言接通"
    }
})
// 查询留言
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
//添加留言
router.post("/add_self_message_content",async (ctx)=>{
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
//删除留言
router.post('/detele_self_message_content',async (ctx) => {
    let SelfMessageModel = mongoose.model("SelfMessage")
    await SelfMessageModel.deleteOne({user_name:ctx.request.body.user_name,create_time:ctx.request.body.create_time })
        .then(res => {
            if( res.ok == 1 && res.deletedCount>0 ){
                ctx.body = {
                    code:200,
                    message:"留言删除成功"
                }
            }else {
                ctx.body = {
                    code:200,
                    message:"留言删除失败"
                }
            }
        }).catch(err=>{
            new Error(err)
    })
})
module.exports = router