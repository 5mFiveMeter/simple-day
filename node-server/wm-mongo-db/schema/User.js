const mongoose = require("mongoose")
let Schema = mongoose.Schema;

let UserSchema = new Schema({
    user_name:{type:String},
    user_password:{type:String},
    user_email:{type:String,default:""},
    user_weixin:{type:String,default:""},
    user_days:{type:Number,default:0},
    last_time:{type:Date,default:Date.now()}
},{collection:"User"})

UserSchema.methods = {
    comparePassword(_password,password){
        return new Promise((resolve,reject)=>{
            if(_password === password){
                resolve()
            }else{
                reject()
            }
        })
    }
}

mongoose.model("User",UserSchema)