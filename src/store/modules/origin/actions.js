import {http} from "../../../apiServices/http_services";

export const get_origin = ({commit}) => {
    return http().get('origin').then(res => {
        commit('GET_ORIGIN', res.data.origins);
    })
};

export const add_origin = ({commit}, data) => {
    return http().post('origin/store', data).then(res => {
        commit('STORE_ORIGIN', res.data);
    })
};

export const edit_origin = ({commit}, id) => {
    return http().get(`origin/edit/${id}`).then(res => {
        commit('EDIT_ORIGIN', res.data.origin);
    })
};

export const update_origin = ({commit}, {id,data}) => {
    return http().post(`origin/update/${id}`, data).then(res => {
        commit('UPDATE_ORIGIN', res.data);
    })
};

export const delete_origin = ({commit}, id) => {
    return http().delete(`origin/destroy/${id}`).then(res => {
        commit('DELETE_ORIGIN', {id:id, data:res.data})
    })
};