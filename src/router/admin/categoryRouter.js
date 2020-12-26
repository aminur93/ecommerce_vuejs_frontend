import category from '../../views/admins/category/Category.vue';

export default [
    {
        path: 'category',
        name: 'Category',
        component: category
    },

    {
        path: 'add_category',
        name: 'add_category',
        component: () => import('../../views/admins/category/add_category.vue')
    },

    {
        path: 'edit_category/:id',
        name: 'edit_category',
        component: () => import('../../views/admins/category/edit_category.vue')
    },
]