<template>
    <div>
      <my-bar :active="0"></my-bar>
    </div>
</template>

<script>
  import myBar from "@/views/common/tabbar"
    export default {
      name: "home",
      components:{myBar},
      data(){
        return {
          tabbar_active:0
        }
      },
      mounted(){

      }
    }
</script>

<style scoped>

</style>
