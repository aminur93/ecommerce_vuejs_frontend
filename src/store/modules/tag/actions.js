import {http} from "../../../apiServices/http_services";

export const get_tag = ({commit}) => {
    return http().get('tag').then(res => {
        commit('GET_TAG', res.data.tags);
    })
};

export const add_tag = ({commit}, data) => {
    return http().post('tag/store', data).then(res => {
        commit('TAG_STORE', res.data);
    })
};

export const edit_tag = ({commit}, id) => {
    return http().get(`tag/edit/${id}`).then(res => {
        commit('EDIT_TAG', res.data.tag);
    })
};

export const update_tag = ({commit}, {id, data}) => {
    return http().post(`tag/update/${id}`, data).then(res => {
        commit('UPDATE_TAG', res.data);
    })
};

export const delete_tag = ({commit}, id) => {
    return http().delete(`tag/destroy/${id}`).then(res => {
        commit('DELETE_TAG', {id:id, message:res.data.message})
    })
};