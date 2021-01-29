import {http} from "../../../apiServices/http_services";

export const getBrands = ({commit}) => {
    return http().get('brand').then(response => {
        commit('GET_BRANDS', response.data.brands);
    })
};

export const addBrands = ({commit}, data) => {
    return http().post('brand/store', data).then(response => {
        commit('BRAND_STORE', response.data);
    })
};

export const edit_brand = ({commit}, id) => {
    return http().get(`brand/edit/${id}`).then(response => {
        commit('EDIT_BRAND', response.data.brand);
    })
};

export const update_brand = ({commit}, {id, data}) => {
    return http().post(`brand/update/${id}`, data).then(response => {
        commit('UPDATE_BRAND', response.data);
    })
};

export const delete_brand = ({commit}, id)=> {
    return http().delete(`brand/destroy/${id}`).then(response => {
        commit('DESTROY_BRAND', {id:id, message: response.data});
    })
};