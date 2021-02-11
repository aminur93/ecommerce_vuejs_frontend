export const GET_ORIGIN = (state, origins) => {
    state.origins = origins;
};

export const STORE_ORIGIN = (state, origin) => {
    if (state.origins.push(origin))
    {
        state.success_message = origin.message;
    }else {
        state.success_message = '';
    }
};

export const EDIT_ORIGIN = (state, origin) => {
    state.origin = origin;
};

export const UPDATE_ORIGIN = (state, data) => {
    if (state.origins.push(data)){
        state.success_message = data.message;
    }else {
        state.success_message = '';
    }
};

export const DELETE_ORIGIN = (state, {id, data}) => {
    if (id){
        state.origins = state.origins.filter(item => {
            return item.id !== id
        })

        state.success_message = data.message;
    } else {
        state.success_message = '';
    }
};