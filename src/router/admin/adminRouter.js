import store from '../../store';
import Home from '../../views/admins/Home.vue';

//routes import
import categoryRoute from './categoryRouter';

export default [
    {
        path: '/dashboard',
        component: Home,
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import('../../views/admins/Dashboard.vue')
            },

            ...categoryRoute
        ],
        beforeEnter(to, from, next){
            if (!store.getters['AuthToken']){
                return next({
                    name: 'Login'
                });
            }else {
                //document.title = to.meta.title;
                next();
            }
        },
    },
]