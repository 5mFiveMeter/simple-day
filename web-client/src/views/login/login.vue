<template>
    <div>
        <my-head></my-head>
        <div class="login-container">
            <van-tabs v-model="active_login" @change="clearErrorMessage">
                <van-tab title="登录">
                    <van-cell-group>
                        <van-field
                            placeholder="请输入昵称"
                            label="用户名"
                            v-model="user_name"
                            :error-message="user_name_err"
                            @blur="checkUserName"
                        />
                        <van-field
                            type="password"
                            placeholder="请输入密码"
                            label="密码"
                            v-model="password"
                            :error-message="password_err"
                            @blur="checkUserPassword"
                        />
                        <van-button type="info" size="large" @click="doLogin">登录</van-button>
                    </van-cell-group>
                </van-tab>
                <van-tab title="注册">
                    <van-cell-group>
                        <van-field
                            placeholder="请输入昵称"
                            label="用户名"
                            required
                            v-model="user_name"
                            :error-message="user_name_err"
                            @blur="checkUserName"
                        />
                        <van-field
                            type="password"
                            placeholder="请输入密码"
                            label="密码"
                            required
                            v-model="password"
                            :error-message="password_err"
                            @blur="checkUserPassword"
                        />
                        <van-field
                            type="text"
                            placeholder="请输入邮箱"
                            label="邮箱"
                            v-model="user_email"
                        />
                        <van-field
                            type="text"
                            placeholder="请输入微信号"
                            label="微信号"
                            v-model="user_weixin"
                        />
                        <van-button type="info" size="large" @click="doRegister">注册</van-button>
                    </van-cell-group>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import myHead from "@/components/head"
    import URL from "@/serviceAPI.config.js"
    import axios from "axios"
    import {Notify} from "vant"
    export default {
        components:{myHead},
        data(){
            return {
                active_login:0,
                user_name:"",
                user_name_err:"",
                password:"",
                password_err:"",
                user_email:"",
                user_weixin:"",
                login_success:false,
            }
        },
        methods:{
            doLogin(){
                var nameCan = this.checkUserName()
                var passwordCan = this.checkUserPassword()
                if(nameCan && passwordCan){
                    axios({
                        url:URL.login,
                        method:"post",
                        data:{
                            userName:this.user_name,
                            password:this.password
                        }
                    }).then(response=>{
                        console.log(response)
                        if(response.data.code == 200){
                            if(response.data.message == "登录成功"){
                                this.$router.push({name:"Home"})
                            }else{
                                Notify({
                                    message:response.data.message,
                                    background:"red"
                                });
                            }
                        }
                        
                    }).catch(err=>{
                        Notify({
                            message:"登录失败",
                            background:"red"
                        });
                    })
                }
                
            },
            doRegister(){
                var nameCan = this.checkUserName()
                var passwordCan = this.checkUserPassword()
                //检查是否填写正确
                if(nameCan && passwordCan){
                    axios({
                        url:URL.register,
                        method:"post",
                        data:{
                            user_name:this.user_name,
                            password:this.password,
                            user_email:this.user_email,
                            user_weixin:this.user_weixin
                        }
                    }).then(response=>{
                        if(response.data.message == "用户已存在"){
                          Notify({
                            message:response.data.message,
                            background:"red"
                          });
                        }else{
                          this.$router.push({path:"/home"})
                        }
                    }).catch(error=>{
                        Notify({
                            message:"注册失败",
                            background:"red"
                        })
                    })
                }
            },
            checkUserName(){
                if(this.user_name.length<1){
                    this.user_name_err = "用户名不能为空"
                }else{
                    this.user_name_err = ""
                    return true
                }
            },
            checkUserPassword(){
                if(this.password.length<6){
                    this.password_err = "密码不能小于6位数"
                }else{
                    this.password_err = ""
                    return true
                }
            },
            clearErrorMessage(){
                this.user_name_err = ""
                this.password_err = ""
            }
        }
    }
</script>

<style lang="less" scoped>
    .login-container{
        margin: 8rem auto 0;
        width: 25rem;
        // height: 30rem;
        box-shadow: 0 0 6px 0 hsla(0,0%,64%,.5);
        background-color: #f8f8f8;
    }
    .van-button--large{
        margin: 0.5rem 0;
        height: 3rem;
        line-height: 3rem;
    }
    .van-field{
        margin: 0.2rem 0;
    }
</style>
