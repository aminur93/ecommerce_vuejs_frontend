import Products from '../../views/admins/products/product.vue';

export default [
    {
        path: 'product',
        name: 'product',
        component: Products
    },

    {
        path: 'color',
        name: 'color',
        component: () => import('../../views/admins/products/color/color.vue')
    },

    {
        path: 'add_color',
        name: 'add_color',
        component: () => import('../../views/admins/products/color/add_color.vue')
    },

    {
        path: 'edit_color/:id',
        name: 'edit_color',
        component: () => import('../../views/admins/products/color/edit_color.vue')
    },

    {
        path: 'size',
        name: 'size',
        component: () => import('../../views/admins/products/size/size.vue')
    },

    {
        path: 'add_size',
        name: 'add_size',
        component: () => import('../../views/admins/products/size/add_size.vue')
    },

    {
        path: 'edit_size/:id',
        name: 'edit_size',
        component: () => import('../../views/admins/products/size/edit_size.vue')
    },

    {
        path: 'origin',
        name: 'origin',
        component: () => import('../../views/admins/products/origin/origin.vue')
    },

    {
        path: 'add_origin',
        name: 'add_origin',
        component: () => import('../../views/admins/products/origin/add_origin.vue')
    },

    {
        path: 'edit_origin/:id',
        name: 'edit_origin',
        component: () => import('../../views/admins/products/origin/edit_origin.vue')
    },

    {
        path: 'material',
        name: 'material',
        component: () => import('../../views/admins/products/material/material.vue')
    },

    {
        path: 'add_material',
        name: 'add_material',
        component: () => import('../../views/admins/products/material/add_material.vue')
    },

    {
        path: 'edit_material/:id',
        name: 'edit_material',
        component: () => import('../../views/admins/products/material/edit_material.vue')
    },
]