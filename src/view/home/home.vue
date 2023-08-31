<template>
    <h2>自定义右键菜单</h2>
    <HotTable :settings="settings"></HotTable>
</template>
<script setup>
import { ref } from "vue";
import { HotTable } from "@handsontable/vue3";
import { registerAllModules } from 'handsontable/registry';
import {RIGTH_CLICK_MENU} from "../../util/settingsList"

registerAllModules();

const settings = ref(RIGTH_CLICK_MENU)


</script>