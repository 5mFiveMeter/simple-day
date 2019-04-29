<template>
    <div class="nonsense">
      <van-tabs sticky color="#199604" title-active-color="#199604">
        <van-tab title="Oneself">
          <van-cell
            title="有什么想对自己说的嘛?"
            :icon="write_message_icon"
            is-link
          ></van-cell>
          <self-message-group></self-message-group>
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
    </div>
</template>

<script>
  import myBar from "@/views/common/tabbar"
  import selfMessageGroup from "./self-message-group"
  import othersMessageGroup from "./others-message-group"
    export default {
      name: "nonsense",
      components:{myBar,selfMessageGroup,othersMessageGroup},
      data(){
        return {
          write_message_icon:require("@/assets/words.png"),
          oneself_message_group:[]
        }
      },
      methods: {

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
