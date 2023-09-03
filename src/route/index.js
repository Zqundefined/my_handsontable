import { createRouter,createWebHistory}  from "vue-router"
const home =()=>import("@/view/home/home.vue");
const index = ()=>import("@/view/index/index.vue");
const table = ()=>import("@/view/table/table.vue");
const table_one = ()=>import("@/view/table/tableOne.vue");
const editor = ()=>import("@/view/table/editor.vue");
const renderer = ()=>import("@/view/table/renderer.vue");
const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"",
            redirect:"/index"
        },
        {
            path:"/index",
            name:'index',
            component:index
        },
        {
            path:"/home",
            name:'home',
            component:home
        },
        {
            path:"/table/:id",
            name:"table",
            component:table,
            children:[
                {
                    path:"columns",
                    name:"自定义Columns",
                    component:table_one
                },
                {
                    path:"leftMenu",
                    name:"自定义右键菜单",
                    component:home
                },
                {
                    path:"editor",
                    name:"自定义编辑单元格",
                    component:editor
                },
                {
                    path:"renderer",
                    name:"自定义单元格编辑",
                    component:renderer
                }
            ]
        }
    ]
})

export default router