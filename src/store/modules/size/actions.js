import {http} from "../../../apiServices/http_services";

export const get_size = ({commit}) => {
    return http().get('size').then(res => {
        commit('GET_SIZE', res.data.sizes);
    })
};

export const add_size = ({commit}, data) => {
    return http().post('size/store', data).then(res => {
        commit('STORE_SIZE', res.data);
    })
};

export const edit_size = ({commit}, id) => {
    return http().get(`size/edit/${id}`).then(res => {
        commit('EDIT_SIZE', res.data.size);
    })
};

export const update_size = ({commit}, {id,data}) => {
    return http().post(`size/update/${id}`, data).then(res => {
        commit('UPDATE_SIZE', res.data)
    })
};

export const delete_size = ({commit}, id) => {
    return http().delete(`size/destroy/${id}`).then(res => {
        commit('DELETE_SIZE', {id:id, data:res.data})
    })
};