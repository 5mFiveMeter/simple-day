<template>
    <div class="self-message-group">
      <van-list>
        <template v-for="(value,index) in oneself_message_group">
          <van-row>{{value}}</van-row>
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
      props:["oneself_message_group"],
      methods:{

      },
      mounted(){
        //查询
      }
    }
</script>

<style scoped lang="less">
.self-message-group{
  overflow-y: scroll;
}
</style>
