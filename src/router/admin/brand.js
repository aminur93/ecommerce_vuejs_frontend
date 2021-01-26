import Brand from '../../views/admins/brand/brand';

export default [
    {
        path: 'brand',
        name: 'brand',
        component: Brand
    },

    {
        path: 'add_brand',
        name: 'add_brand',
        component: () => import('../../views/admins/brand/add_brand')
    },

    {
        path: 'edit_brand/:id',
        name: 'edit_brand',
        component: () => import('../../views/admins/brand/edit_brand')
    }
]