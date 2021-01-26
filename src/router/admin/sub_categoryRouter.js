import SubCategory from '../../views/admins/sub_category/sub_category';

export default [
    {
        path: 'sub_category',
        name: 'sub_category',
        component: SubCategory
    },

    {
        path: 'add_sub_category',
        name: 'add_sub_category',
        component: () => import('../../views/admins/sub_category/add_sub_category')
    },

    {
        path: 'edit_sub_category/:id',
        name: 'edit_sub_category',
        component: () => import('../../views/admins/sub_category/edit_sub_category')
    }
]