<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    window.addEventListener('unload', this.saveState)
  },
  methods:{
    saveState (){
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
}
</style>
