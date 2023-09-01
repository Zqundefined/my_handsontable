export const menuList = [
    {
        name:"普通",
        path:"/index",
        id:'1',
    },
    {
        name:"高级",
        path:"/home",
        id:'2',
        children:[
            {id:'2_1',name:"右键菜单",path:"/home",dataName:"table2"}
        ]
    },
    {
        name:"表格",
        path:"/table",
        id:'3',
        children:[
            {id:'3_1',name:"主table",path:"/table/text"},
            {id:'3_2',name:"第一个table",path:"/table/text/columns"},
            {id:'3_3',name:"自定义右键",path:"/table/text/leftMenu"},
            {id:'3_4',name:"自定义单元格编辑",path:"/table/text/editor"},
            {id:'3_5',name:"自定义单元格显示",path:"/table/text/renderer"},
        ]
    }
]