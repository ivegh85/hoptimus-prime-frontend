import { createStore } from "vuex";
import { auth } from "./auth.module";
//import { prod } from "./product.module";

const store = createStore({
    modules: {
        auth,
        //prod,
    },
});

export default store;
