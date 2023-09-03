<template>
    <div>
        <h1>columns Render</h1>
        <hot-table ref="hot" :settings="hotSettings"></hot-table>
        <myinput ref="myinputDom" v-show="false"></myinput>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { HotTable } from '@handsontable/vue3';
import { registerAllModules } from 'handsontable/registry';
import { ProKey } from "@/util/geiKey";
import myinput from "@/components/myInput/index.vue"

// register Handsontable's modules
registerAllModules();
const hot = ref(null)
const myinputDom = ref(null)

onMounted(()=>{
    // const hotDom = hot.value.hotInstance
    // console.dir(myinputDom.value.$el)
    // hot.value.renderers.registerRenderer('asterix', myinput);
})

const hotSettings = reactive({
    licenseKey: ProKey,
    colWidths: 200,
    colHeights: 100,
    data: [
        ['A1', 'https://handsontable.com/docs/img/examples/professional-javascript-developers-nicholas-zakas.jpg'],
        ['A2', 'https://handsontable.com/docs/img/examples/javascript-the-good-parts.jpg']
    ],
    columns: [
        {
            renderer(instance, td, row, col, prop, value) {
                // const myInput = Object.assign({}, myinputDom.value.$el)
                const myInput = myinputDom.value.$el
                console.log(myInput)
                myInput.style.display = "block"
                td.appendChild(myInput)
                return td
            }
        },
        {
            renderer(instance, td, row, col, prop, value) {
                const img = document.createElement('img');

                img.src = value;

                img.addEventListener('mousedown', event => {
                    event.preventDefault();
                });

                td.innerText = '';
                td.appendChild(img);

                return td;
            }
        }]
})





</script>

<style lang="scss" scoped></style>