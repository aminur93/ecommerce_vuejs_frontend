export const authenticated = (state) => {
    return state.token && state.user
};

export const AuthToken = (state) => {
    return state.token;

    // const token = localStorage.getItem('token');
    // return token != null;
};

export const userInfo = (state) => {
    return state.user;
};