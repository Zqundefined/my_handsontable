<template>
    <hot-table :settings="hotSettings"></hot-table>
</template>
<script setup>
import { defineComponent, reactive } from 'vue';
import { HotTable } from '@handsontable/vue3';
import { registerAllModules } from 'handsontable/registry';
import { ProKey } from "@/util/geiKey";
import { useRouter } from 'vue-router';

// register Handsontable's modules
registerAllModules();
const router = useRouter()
// console.log(router)
const hotSettings = reactive({
    licenseKey: ProKey,
})


</script>
<style lang="scss" scoped>
.pageView {
    display: flex;
    height: 100%;

    .leftMenu {
        margin: 9px;
        width: 15%;
        border: 1px solid red;
    }

    .content {
        flex: 1;
    }
}
</style>