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
        ]
    },
]