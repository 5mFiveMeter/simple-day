const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/willme"
const glob = require("glob")
const path = require("path")


exports.initSchema = ()=>{
    glob.sync(path.resolve(__dirname,"./schema","**/*.js")).forEach(require)
}

exports.connect = ()=>{
    mongoose.connect(db)
    let maxConnectTimes = 0

    return new Promise((resolve,reject)=>{

        mongoose.connection.on("disconnected",()=>{
            console.log("---数据库断开---")
            if(maxConnectTimes<3){
                maxConnectTimes+=1
                mongoose.connect(db)
            }else{
                reject()
                throw new Error("超出最大断开连接次数")
            }
        })

        mongoose.connection.on("error",(err)=>{
            console.log("---数据库错误---")
            if(maxConnectTimes<3){
                maxConnectTimes+=1
                mongoose.connect(db)
            }else{
                reject()
                throw new Error("超出最大错误连接次数")
            }
        })

        mongoose.connection.once("open",()=>{
            console.log("---数据库已打开---")

            resolve()
        })
    })
}
