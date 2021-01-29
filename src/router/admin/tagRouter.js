import Tag from '../../views/admins/tag/tag.vue';

export default [

    {
        path: 'tag',
        name: 'tag',
        component: Tag
    },

    {
        path: 'add_tag',
        name: 'add_tag',
        component: () => import('../../views/admins/tag/add_tag.vue')
    },

    {
        path: 'edit_tag/:id',
        name: 'edit_tag',
        component: () => import('../../views/admins/tag/edit_tag.vue')
    }
]