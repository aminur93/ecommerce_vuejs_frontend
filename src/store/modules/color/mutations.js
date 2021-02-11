export const GET_COLORS = (state, data) => {
    state.colors = data;
};

export const STORE_COLOR = (state, data) => {
    if (state.colors.push(data))
    {
        state.success_message = data.message;
    }else {
        state.success_message = '';
    }
};

export const EDIT_COLOR = (state, data) => {
    state.color = data;
};

export const UPDATE_COLOR = (state, data) => {
    if (state.colors.push(data))
    {
        state.success_message = data.message;
    }else {
        state.success_message = '';
    }
};

export const DESTROY_COLOR = (state, {id, message}) => {
    if (id){
        state.colors = state.colors.filter(item => {
            return item.id !== id
        });

        state.success_message = message;
    } else {
        state.success_message = '';
    }
};