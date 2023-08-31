import { ProKey } from "@/util/geiKey";
import { ContextMenu } from 'handsontable/plugins/contextMenu';
import {tableData2} from "@/util/options"
// 右键菜单配置
export const RIGTH_CLICK_MENU = {
    data: tableData2,
    rowHeaders: true,
    colHeaders: true,
    // contextMenu: true,
    height: 'auto',
    licenseKey: ProKey,
    disableVisualSelection:"header",
    contextMenu: {
        items: {
            'row_above': {//向上插入行
                name: 'Insert row above this one (custom name)',
                disabled() {
                    const a = this.getSelectedLast()//获取选择框坐标[y,x,y,x] 从0，0开始
                    console.log('选择框坐标', a)
                    return a[0] === 0
                }
            },
            'row_below': {//向下插入行
                name: "向下插入一行"
            },
            "col_left": {
                name: "向左插入列"
            },
            "clear_column": {
                name: '删除列数据'
            },
            "clear_row": {
                name: "删除行数据",
                callback() {
                    console.log('this', this)
                    // this.selectAll()
                }
            },
            "alignment": {
                name: "对齐",
                // submenu:{
                //     items:[
                //         {key:"Left",name:"左对齐"}
                //     ]
                // }
            },
            "make_read_only": {
                name: "设置只读",
                callback(e) {
                    console.log('e', e)
                }
            },
            'separator': ContextMenu.SEPARATOR,//横线
            'clear_custom': {
                name: '清除所有数据',
                callback() {
                    this.clear();
                }
            },
            credits: { // Own custom property
                // 自定义渲染菜单
                renderer(hot, wrapper, row, col, prop, itemValue) {
                    const elem = document.createElement('marquee');

                    elem.style.cssText = 'background: lightgray;';
                    elem.textContent = 'Brought to you by...';

                    return elem;
                },
                // 防止 mouseoever 突出显示要选择的项目
                disableSelection: true, // Prevent mouseoever from highlighting the item for selection
                isCommand: false // 防止点击是关闭菜单
            }
        }
    }
}