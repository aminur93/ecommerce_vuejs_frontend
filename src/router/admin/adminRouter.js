import store from '../../store';
import Home from '../../views/admins/Home.vue';

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