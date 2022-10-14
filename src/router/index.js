import { createRouter, createWebHistory} from "vue-router";

import Home from "@/components/Home";
import Imprint from "@/components/Imprint";
import Help from "@/components/Help";
import Registration from "@/components/Registration";
import Login from "@/components/Login";

const routes = [
        { path: '/', component: Home },
        { path: '/Registration', component: Registration },
        { path: '/Login', component: Login },
        { path: '/Imprint', component: Imprint },
        { path: '/Help', component: Help }
    ]

const router = createRouter( {
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
