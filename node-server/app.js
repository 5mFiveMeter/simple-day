const Koa = require('koa')
const bodyParser = require("koa-bodyparser")
const Router = require("koa-router")
const cors = require("koa2-cors")

const {initSchema,connect} =require("./wm-mongo-db/init")


const app = new Koa()
app.use(bodyParser())
app.use(cors())

let user = require("./appAPI/user.js")
let selfMessage = require("./appAPI/self-message.js")

//------------路由
let router = new Router()
router.use("/user",user.routes())
router.use("/self-message",selfMessage.routes())
app.use(router.routes())
app.use(router.allowedMethods())


app.use(async ctx=>{
    ctx.body = "未知错误"
})

//----------mongodb
;(async ()=>{
    connect()
    initSchema()
})()


app.listen(3000,()=>{
    console.log("Listening at 3000")
})