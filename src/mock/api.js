export const editorApi = [
    {
        title:'APIs',
        children:[
            {
                title:"BasePlugin",
                remake:"基础插件",
                url:"https://handsontable.com/docs/javascript-data-grid/api/base-plugin/"
            }
        ]
    },
    {
        title:"配置选项",
        children:[
            {
                title:"editor",
                remake:"",
                url:"https://handsontable.com/docs/javascript-data-grid/api/options/#editor"
            },
            {
                title:"enterBeginsEditing",
                remake:"",
                url:"https://handsontable.com/docs/javascript-data-grid/api/options/#enterBeginsEditing"
            }
        ]
    },
    {
        title:"核心方法",
        children:[
            {
                title:"destroyEditor()",
                remake:"销毁当前编辑器，呈现表格并准备新选定单元格的编辑器。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#destroyeditor"
            },
            {
                title:"getActiveEditor()",
                remake:"获取选中编辑器",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#getactiveeditor"
            },
            {
                title:"getCellEditor(rowOrMeta, column) ",
                remake:"通过提供的行和列参数返回单元格编辑器类。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#getcelleditor"
            },
            {
                title:"getCellMeta(row, column) ",
                remake:"返回给定行和列坐标的单元格属性对象。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#getcellmeta"
            },
            {
                title:"getCellMetaAtRow(row)",
                remake:"返回指定物理行索引的单元格元对象数组。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#getcellmetaatrow"
            },
            {
                title:"getCellsMeta",
                remake:"获取表中至少一次生成的所有单元格元设置（按单元格初始化的顺序）。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#getcellsmeta"
            },
            {
                title:"setCellMeta(row, column, key, value)",
                remake:"将 key 属性定义的属性设置为 params 对应的单元格的元对象",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#setcellmeta"
            },
            {
                title:"setCellMetaObject(row, column, prop)",
                remake:"将 prop 定义的单元格元数据对象设置为相应的参数行和列。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#setcellmetaobject"
            },
            {
                title:"removeCellMeta(row, column, key)",
                remake:"从提供的行和列坐标的单元格元对象中删除由 key 参数定义的属性。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/core/#removecellmeta"
            },
        ]
    },
    {
        title:"钩子",
        children:[
            {
                title:"afterBeginEditing(row, column)",
                remake:"打开并渲染编辑器后触发。",
                url:'https://handsontable.com/docs/javascript-data-grid/api/hooks/#afterbeginediting'
            },
            {
                title:"afterGetCellMeta(row, column, cellProperties)",
                remake:"获取单元格设置后触发。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/hooks/#aftergetcellmeta"
            },
            {
                title:"beforeGetCellMeta(row, column, cellProperties)",
                remake:"在获取单元格设置之前触发。",
                url:"https://handsontable.com/docs/javascript-data-grid/api/hooks/#beforegetcellmeta"
            },
        ]
    }
]