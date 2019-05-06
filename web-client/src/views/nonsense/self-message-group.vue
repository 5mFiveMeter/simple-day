<template>
    <div>
      <span>self</span>
    </div>
</template>

<script>
  import URL from "@/utils/url.js"
  import Qs from "qs"
    export default {
      name: "message-group",
      mounted(){
        //查询
        this.axios({
          url:URL.get_self_message_content,
          method:"get",
          params:{
            user_name:"888888"
          }
        }).then(response =>{
          console.log(response)
        })
        //添加
        var add_data = {
          user_name:"888888",
          create_time:Date.now(),
          message_type:"self",
          message_content:"这是一条信息"
        }
        this.axios({
          url:URL.add_self_message_content,
          method:"post",
          transformRequest: [function (data) {
            // 对 data 进行任意转换处理
            return Qs.stringify(data)
          }],
          data:{
            user_name:"888888",
            create_time:Date.now(),
            message_type:"self",
            message_content:"这是一条信息"
          }
        }).then(response =>{
          console.log(response)
        })
      }
    }
</script>

<style scoped>

</style>
