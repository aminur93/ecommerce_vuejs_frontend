import {http} from "../../../apiServices/http_services";

export const get_subCategories = ({commit}) => {
    return http().get('sub_category').then(response => {
        commit('SET_SUBCATEGORY', response.data.sub_categories);
    })
};

export const add_subcategory = ({commit}, data) => {
    return http().post('sub_category/store', data).then(response => {
        commit('STORE_SUBCATEGORY', response.data);
    })
};

export const edit_subCategory = ({commit},id) => {
    return http().get(`sub_category/edit/${id}`).then(response => {
        commit('EDIT_SUBCATEGORY', response.data.sub_category);
    })
};

export const update_subCategory = ({commit}, {id, data}) => {
    return http().post(`sub_category/update/${id}`, data).then(response => {
        commit('SET_UPDATE_SUBCATEGORY', response.data);
    })
};

export const delete_subCategory = ({commit}, id) => {
    commit('DELETE_SUBCATEGORY', id);
    return http().delete(`sub_category/destroy/${id}`);
};