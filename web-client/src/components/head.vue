<template>
    <div class="head-container">
        <span class="head-logo">By WillMe</span>
        <div class="head-info">
            <span>Welcome to here</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .head-container{
        position: relative;
        height: 2.5rem;
        padding: 0.5rem 1.5rem;
        border-bottom: 1px solid #D0D0D0;
        .head-logo{
            margin-left: 0.1rem;
            line-height: 2.5rem;
            font-size: 0.8rem;
        }
        .head-info{
            line-height: 2.5rem;
            float:right;
            overflow: hidden;
        }
    }
</style>