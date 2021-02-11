import {http} from "../../../apiServices/http_services";

export const get_color = ({commit}) => {
    return http().get('/color').then(res => {
        commit('GET_COLORS', res.data.colors);
    })
};

export const add_color = ({commit}, data) => {
    return http().post('/color/store', data).then(res => {
        commit('STORE_COLOR', res.data);
    })
};

export const edit_color = ({commit}, id) => {
    return http().get(`color/edit/${id}`).then(res => {
        commit('EDIT_COLOR', res.data.color);
    })
};

export const update_color = ({commit}, {id, data}) => {
    return http().post(`color/update/${id}`, data).then(res => {
        commit('UPDATE_COLOR', res.data);
    })
};

export const delete_color = ({commit}, id) => {
    return http().delete(`color/destroy/${id}`).then(res => {
        commit('DESTROY_COLOR', {id:id, message:res.data.message})
    })
};