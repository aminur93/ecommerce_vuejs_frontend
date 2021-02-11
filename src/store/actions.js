import {http} from "../apiServices/http_services";

export const login = ({dispatch}, data) => {
    return http().post('/auth/login', data).then((response) => {
        dispatch('attempt', response.data.access_token);
        dispatch('setToken', response.data.access_token);
    });
};

export const attempt = ({commit, state}, token) => {
    if (token){
        commit('SET_TOKEN', token);
    }

    if (!state.token) {
        return
    }

    try {
        return http().get('/auth/me')
            .then(response => {
                commit('SET_USER', response.data);
            });
    }catch (e) {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
    }
};

export const setToken = (_, token) => {
    localStorage.setItem('token', token);
};

export const logout = ({commit}) => {

    return http().post('/auth/logout')
        .then(() => {

            commit('SET_TOKEN', null);
            commit('SET_USER', null);

            localStorage.removeItem('token');
        });
};

export const forgetPassword = ({commit}, data) => {
    return http().post('/auth/forgetPassword', data).then(res => {
        commit('FORGET_PASSWORD', res.data.message)
    })
};

export const resetPassword = ({commit}, data) => {
    return http().post('/auth/changePassword', data).then(res => {
        commit('RESET_PASSWORD', res.data.message);
    })
};