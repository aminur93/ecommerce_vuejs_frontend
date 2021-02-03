import store from '../../store';
import Login from '../../views/auth/Login.vue';

export default [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        beforeEnter(to, from, next){
            if(!store.state.token)
            {
                next();
            }else {
                next('/dashboard');
            }
        }
    },

    {
        path: '/forget-password',
        name: 'ForgetPassword',
        component: () => import('../../views/auth/ForgetPassword.vue'),
        beforeEnter(to, from, next){
            if(!store.state.token)
            {
                next();
            }else {
                next('/dashboard');
            }
        }
    },

    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: () => import('../../views/auth/ResetPassword.vue'),
        beforeEnter(to, from, next){
            if(!store.state.token)
            {
                next();
            }else {
                next('/dashboard');
            }
        }
    }
]