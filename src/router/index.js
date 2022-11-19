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
import ProductEdit from "@/views/product/ProductEdit";


const routes = [
        //existing routes
        { path: '/', name: 'Home',  component: Home },
        { path: '/registration', name: 'Registration', component: Registration },
        { path: '/login', name: 'Login', component: Login },
        { path: '/imprint', name: 'Imprint', component: Imprint },
        { path: '/help', name: 'Help', component: Help },
        { path: '/productsView', name: 'ProductsView', component: ProductsView},
        { path: '/productdetails/:id/:name', name: 'ProductDetails', component: ProductDetails, props: true},
        { path: '/productedit/:id', name: 'ProductEdit', component: ProductEdit, props: true},
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
