import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store";

import 'bootstrap/dist/css/bootstrap.css'

createApp(App)
    //Check this out at home second is passed as an option
    .use(router)
    .use(store)
    .mount('#app')

import "bootstrap/dist/js/bootstrap";



