import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import AuthRouter from './auth/authRouter.js';
import AdminRouter from './admin/adminRouter.js';

const routes = [
    ...AdminRouter,
    ...AuthRouter
];

const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router