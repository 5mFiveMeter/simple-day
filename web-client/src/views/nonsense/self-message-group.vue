<template>
    <div class="self-message-group">
      <van-list>
        <template v-for="(value,index) in oneself_message_group">
          <van-row>
            <van-col :span="24">{{value.message_content}}</van-col>
            <van-col :span="7" :offset="17">{{value.create_time | msFormatTime}}</van-col>
          </van-row>
        </template>
      </van-list>
    </div>
</template>

<script>
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

      },
      mounted(){

      }
    }
</script>

<style lang="less">
.self-message-group{
  overflow-y: auto;
  height: 485px;
  background-color: #fff;
  .van-list{
    .van-row{
      padding: 10px;
      border-bottom: 1px solid #f6f7f8;
      .van-col{
        word-wrap: break-word;
        padding: 5px 0;
      }
    }
  }
}
</style>
