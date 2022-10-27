import { createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home";
import Imprint from "@/views/Imprint";
import Help from "@/views/Help";
import Registration from "@/views/usermgmt/Registration";
import Login from "@/views/usermgmt/Login";
import ProductsView from "@/views/product/ProductsView";
import AuctionDetails from "@/views/auction/AuctionDetails";
import NotFound from "@/views/NotFound";
import AuctionsView from "@/views/auction/AuctionsView";
import ProductDetails from "@/views/product/ProductDetails";


const routes = [
        //existing routes
        { path: '/', name: 'Home',  component: Home },
        { path: '/registration', name: 'Registration', component: Registration },
        { path: '/login', name: 'Login', component: Login },
        { path: '/imprint', name: 'Imprint', component: Imprint },
        { path: '/help', name: 'Help', component: Help },
        { path: '/productsView', name: 'ProductsView', component: ProductsView},
        { path: '/productdetails', name: 'ProductDetails', component: ProductDetails},
        { path: '/auctionsView', name: 'AuctionsView', component: AuctionsView},
        { path: '/auctiondetails/:id', name: 'AuctionDetails', component: AuctionDetails },

        //404
        {path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }

    ]

const router = createRouter( {
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
