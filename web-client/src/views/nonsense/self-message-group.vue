<template>
    <div class="self-message-group">
      <van-list>
        <template v-for="(value,index) in oneself_message_group">
          <van-cell :key="value.create_time">
            <van-row style="padding: 8px">
              <van-col :span="24" style="word-wrap: break-word">{{value.message_content}}</van-col>
              <van-col :span="10" :offset="14">{{value.create_time | msFormatTime}}</van-col>
            </van-row>
            <span class="sd-close-icon" style="position: absolute;right: 5px;top: 0;line-height: 1.15" @click="deteleTheMessage(value.create_time)">x</span>
          </van-cell>
        </template>
      </van-list>
      <van-row v-if="oneself_message_group.length == 0">
        <van-col :span="24" style="text-align: center">..........................</van-col>
        <van-col :span="24" style="text-align: center">你的孤独谁能懂</van-col>
      </van-row>
    </div>
</template>

<script>
  import URL from '@/utils/url.js'
  import {Notify} from "vant"
  import {Dialog} from "vant"
    export default {
      name: "message-group",
      data(){
        return {

        }
      },
      filters:{
        msFormatTime(msCount){
          var date = new Date(Number(msCount));
          var Y = date.getFullYear() + '/';
          var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '/';
          var D = date.getDate()<10? '0'+ date.getDate(): date.getDate() + ' ';
          var h = date.getHours()<10? '0'+ date.getHours(): date.getHours() + ':';
          var m = date.getMinutes()<10? '0'+ date.getMinutes(): date.getMinutes() + '';
          var s = date.getSeconds()<10? '0'+ date.getSeconds(): date.getSeconds();
          return Y + M + D + " " + h + m;
          // return msCount
        }
      },
      methods:{

      },
      props:["oneself_message_group"],
      methods:{
        //删除留言
        deteleTheMessage(createTime){
          Dialog.confirm({
            title: '提示',
            message: '确认删除?'
          }).then(() => {
            this.axios.post(URL.detele_self_message_content,{
              user_name:this.$store.state.user_name,
              create_time:createTime
            }).then(response => {
              if(response.data.code == 200){
                this.$emit('update_list')
                Notify({
                  message:"删除成功",
                  background:"green"
                })
              }else{
                Notify({
                  message:"删除失败",
                  background:"red"
                })
              }
            })
          }).catch(err =>{
            new Error(err)
          });
        }
      },
      watch:{
        oneself_message_group:()=>{

        }
      }
    }
</script>

<style lang="less">
.self-message-group{
  overflow-y: auto;
  height: calc(100vh - 139px);
  background-color: #fff;
  .van-cell{
    padding: 0;
  }
}
</style>
