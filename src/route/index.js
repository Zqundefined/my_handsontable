import { createRouter,createWebHistory}  from "vue-router"
const home = import("../view/home/home.vue");
const index = import("../view/index/index.vue");
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
        }
    ]
})

export default router