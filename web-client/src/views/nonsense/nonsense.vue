<template>
    <div class="nonsense">
      <van-tabs sticky color="#199604" title-active-color="#199604">

        <van-tab title="Oneself">
          <van-cell
            title="有什么想对自己说的嘛?"
            :icon="write_message_icon"
            is-link
            @click="showAddDialog"
          ></van-cell>
          <self-message-group :oneself_message_group="oneself_message_group"></self-message-group>
        </van-tab>

        <van-tab title="Others">
          <van-cell
            title="有什么想告诉别人的?"
            :icon="write_message_icon"
            is-link
          ></van-cell>
          <others-message-group></others-message-group>
        </van-tab>

      </van-tabs>
      <my-bar :active="1"></my-bar>

      <!--增加个人留言-->
      <van-dialog
        v-model="add_message_dialog"
        title="添加留言"
        cancel-button-text="取消添加"
        confirm-button-text="添加留言"
        show-cancel-button
      >
        <van-field
          v-model="edit_message"
          left-icon="edit"
        >
        </van-field>

      </van-dialog>
    </div>
</template>

<script>
  import myBar from "@/views/common/tabbar"
  import URL from "@/utils/url.js"
  import {Notify} from "vant"
  import selfMessageGroup from "./self-message-group"
  import othersMessageGroup from "./others-message-group"
    export default {
      name: "nonsense",
      components:{myBar,selfMessageGroup,othersMessageGroup},
      data(){
        return {
          write_message_icon:require("@/assets/words.png"),
          oneself_message_group:[],
          add_message_dialog:false,
          edit_message:""
        }
      },
      methods: {
        showAddDialog(){
          this.add_message_dialog = true
        },
        addSelfMessage(){
          var add_data = {
            user_name:this.$store.state.user_name,
            create_time:Date.now(),
            message_type:"self",
            message_content:this.edit_message
          }
          this.axios.post(URL.add_self_message_content,add_data)
            .then(response =>{
            console.log(response)
          })
        },
        //查询个人留言
        getSelfMessage(){
          this.axios({
            url:URL.get_self_message_content,
            method:"get",
            params:{
              user_name:this.$store.state.user_name
            }
          }).then(response =>{
            if(response.data.code === 200){
              this.oneself_message_group = response.data.data
            }else{
              Notify({
                message:"留言获取失败",
                background:"green"
              })
            }
            // console.log(response.data)
          })
        }
      },
      mounted(){
        this.getSelfMessage()
      }
    }
</script>

<style scoped lang="less">
.nonsense{
  .van-cell{
    border-bottom: 1px solid #f8f8f8;
  }
}
</style>
