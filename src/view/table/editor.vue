<template>
    <div class="content">
        <h1>自定义编辑</h1>
        <hot-table :settings="hotSettings"></hot-table>
        <h2>相关指南</h2> 
        <ul>
            <li>
                <a href="https://handsontable.com/docs/javascript-data-grid/cell-editor" style="color: blue;">Cell editor</a>
            </li>
        </ul>
        <h2>相关api</h2> 
        <ul v-for="(item,index) in editorApi" :key="index">
            <li >{{ item.title }}</li>
            <ul v-for="(subItem,subIndex) in item.children" :key="subIndex">
                <li>
                    <a :href="subItem.url" target="_blank"> {{ subItem.title }}
                        <br/>
                        <p >
                            {{ subItem.remake }}
                        </p>
                    </a>
                </li>
            </ul>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { HotTable } from '@handsontable/vue3';
import { TextEditor } from 'handsontable/editors/textEditor';
import { registerAllModules } from 'handsontable/registry';
import { editorApi } from "@/mock/api"
import { ProKey } from "@/util/geiKey";

// register Handsontable's modules
registerAllModules();
class CustomEditor extends TextEditor {
    createElements() {
        super.createElements();
        this.TEXTAREA = document.createElement('input');
        this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');
        this.TEXTAREA.setAttribute('data-hot-input', true);
        this.textareaStyle = this.TEXTAREA.style;
        this.TEXTAREA_PARENT.innerText = '';
        this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
    }
}
const hotSettings = reactive({
    startRows: 5,
    columns: [
        {
            editor: CustomEditor
        }
    ],
    colHeaders: true,
    colWidths: 200,
    licenseKey: ProKey,
}
)
</script>

<style scoped lang="scss">
</style>