import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AuthRouter from './auth/authRouter.js';
import AdminRouter from './admin/adminRouter.js';
import EcommerceRouter from './ecommerce/ecommerceRouter.js';

const routes = [
    ...AdminRouter,
    ...EcommerceRouter,
    ...AuthRouter
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router