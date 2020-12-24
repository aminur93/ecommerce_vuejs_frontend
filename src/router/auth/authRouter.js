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
    }
]