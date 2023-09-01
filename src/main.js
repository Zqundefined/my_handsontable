import { createApp } from 'vue'
import router from "./route/index";
import './style.css'
import App from './App.vue'
import "./assets/styles/handsontable/index.scss"
import ElementPlus from "element-plus"
// import 'element-plus/dist/index.css'
import "./assets/styles/elementPlus/index.scss"

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
