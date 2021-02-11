export const SET_TOKEN = (state, token) => {
    state.token = token;
};

export const SET_USER = (state, data) => {
    state.user = data;
};

export const FORGET_PASSWORD = (state, message) => {
    state.success_message = message;
};

export const RESET_PASSWORD = (state, message) => {
    state.success_message = message;
};