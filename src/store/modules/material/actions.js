import {http} from "../../../apiServices/http_services";

export const get_material = ({commit}) => {
    return http().get('material').then(res => {
        commit('GET_MATERIAL', res.data.materials);
    })
};

export const add_material = ({commit}, data) => {
    return http().post('material/store', data).then(res => {
        commit('STORE_MATERIAL', res.data);
    })
};

export const edit_material = ({commit}, id) => {
    return http().get(`material/edit/${id}`).then(res => {
        commit('EDIT_MATERIAL', res.data.material);
    })
};

export const update_material = ({commit}, {id, data}) => {
    return http().post(`material/update/${id}`, data).then(res => {
        commit('UPDATE_MATERIAL', res.data);
    })
};

export const delete_material = ({commit}, id) => {
    return http().delete(`material/destroy/${id}`).then(res => {
        commit('DELETE_MATERIAL', {id:id, data:res.data})
    })
};