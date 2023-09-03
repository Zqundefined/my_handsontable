<template>
    <div>
        <!-- <el-input v-model="modalVlue" placeholder="我自己的input"></el-input> -->
        <el-button type="primary">me</el-button>
    </div>
</template>

<script setup>
import { ref , defineProps} from "vue";

const props =  defineProps()

const modalVlue = ref()


</script>

<style lang="scss" scoped>


</style>