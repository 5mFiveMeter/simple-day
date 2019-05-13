<template>
  <div>
    <van-col :span="24" style="text-align: center">..........................</van-col>
    <van-col :span="24" style="text-align: center">人的孤独谁能懂</van-col>
    <my-bar :active="2"></my-bar>
  </div>
</template>

<script>
  import myBar from "@/views/common/tabbar"
    export default {
      name: "person",
      components:{myBar}
    }
</script>

<style scoped>

</style>
