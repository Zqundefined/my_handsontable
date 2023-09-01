<template>
    <div class="content">
        <h1>高级表格</h1>
        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.content{
    height: 100%;
    display: flex;
    flex-direction: column;
}
.content h1{
    margin: 0;
}
.subTableView{
    overflow: hidden;
}
</style>