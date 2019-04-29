<template>
  <div>
    <div class="nonsense">
      person
    </div>
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
