<template>
    <el-menu 
        :unique-opened="true"
        menu-trigger="click"
        active-text-color="#ffd04b"
        :default-active="route.path"
        :router="true"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose">
        <template v-for="(item) in menuList" :key="item.id">
            <el-menu-item v-if="!item.children" :index="item.path">
                <span>{{ item.name }}</span>
            </el-menu-item> 
            <el-sub-menu v-else v-for="(subItem) in item.children" :key="subItem.id" >
                <template #title>
                    <span>{{ item.name }}</span>
                </template>
                <el-menu-item :index="subItem.path" >{{subItem.name}}</el-menu-item>
            </el-sub-menu>
        </template>
    </el-menu>
</template>
<script setup>
import {menuList} from "@/mock/home.js"
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute()
console.log('route :>> ', route);

const handleOpen = (key, ...e) => {
    // activeIndex.value = key
    console.log("handleOpen",key, e)
}
const handleClose = (key, keyPath) => {
    // console.log("handleClose",key, keyPath)
}

</script>
<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100%;
}
</style>
