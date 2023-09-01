<script setup>
import leftMenu from '@/components/public/leftMenu.vue'
// import { getCurrentInstance } from "vue"
// const config = getCurrentInstance()
// console.log(config.proxy.$tableKey)
</script>

<template>
  <div class="page">
    <div class="leftMenu">
      <leftMenu></leftMenu>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page{
  display: flex;
  height: 100%;
  .leftMenu{
    // width: 15%;
  }
  .content{
    overflow-y: auto;
    flex: 1;
    max-height: 100%;
  }
}
</style>
