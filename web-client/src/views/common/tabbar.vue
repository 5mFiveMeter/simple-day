<template>
      <van-tabbar v-model="bar_active" active-color="#1296db">
        <van-tabbar-item to="/home">
          <img :src="bar_active==0?shouye_img_blue:shouye_img" slot="icon">
          <span>首页</span>
        </van-tabbar-item>
        <van-tabbar-item to="/nonsense">
          <img :src="bar_active==1?message_img_blue:message_img" slot="icon">
          <span>胡诌</span>
        </van-tabbar-item>
        <van-tabbar-item to="/person">
          <img :src="bar_active==2?yonghu_img_blue:yonghu_img" slot="icon">
          <span>俺</span>
        </van-tabbar-item>
      </van-tabbar>
</template>

<script>
    export default {
      name: "tabbar",
      props:["active"],
      data(){
        return {
          shouye_img:require("@/assets/shouye.png"),
          shouye_img_blue:require("@/assets/shouye-blue.png"),
          yonghu_img:require("@/assets/yonghu.png"),
          yonghu_img_blue:require("@/assets/yonghu-blue.png"),
          message_img:require("@/assets/message.png"),
          message_img_blue:require("@/assets/message-blue.png"),
          bar_active:this.active
        }
      },
      computed:{

      }
    }
</script>

<style lang="less" scoped>
  .van-tabbar{
    border-top: 1px solid #D0D0D0;
  }
.van-tabbar-item{
  img{
    width: 20px;
    height: 20px;
  }
}
</style>
