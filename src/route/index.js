import { createRouter,createWebHistory}  from "vue-router"
const home = import("@/view/home/home.vue");
const index = import("@/view/index/index.vue");
const table = import("@/view/table/table.vue");
const table_one = import("@/view/table/tableOne.vue")
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
                    path:"one",
                    name:"第一个table",
                    component:table_one
                }
            ]
        }
    ]
})

export default router