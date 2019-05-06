const mongoose = require("mongoose")
let Schema = mongoose.Schema

let SelfMessage = new Schema({
    user_name:{type:String},
    create_time:{type:Number,default:0},
    message_type:{type:String},
    message_content:{type:Array,default:[]}
},{collection:"SelfMessage"})

mongoose.model("SelfMessage",SelfMessage)

