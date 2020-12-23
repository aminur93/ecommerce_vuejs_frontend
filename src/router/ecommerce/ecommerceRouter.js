import Master from '../../views/ecommerce/Master.vue'

export default [
    {
        path: '/',
        component: Master,
        children: [
            {
                path: '',
                name: 'MainCommerce',
                component: () => import('../../views/ecommerce/MainCommerce.vue')
            }
        ]
    }
]