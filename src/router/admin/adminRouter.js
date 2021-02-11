import store from '../../store';
import Home from '../../views/admins/Home.vue';

//routes import
import categoryRoute from './categoryRouter';
import subCategoryRoute from './sub_categoryRouter';
import BrandRoute from './brand';
import TagRoute from './tagRouter';
import ProductRoute from './productRouter';

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

            ...categoryRoute,

            ...subCategoryRoute,

            ...BrandRoute,

            ...TagRoute,

            ...ProductRoute

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