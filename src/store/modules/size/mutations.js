export const GET_SIZE = (state, sizes) => {
    state.sizes = sizes;
};

export const STORE_SIZE = (state, size) => {
    if (state.sizes.push(size))
    {
        state.success_message = size.message;
    }else {
        state.success_message = '';
    }
};

export const EDIT_SIZE = (state, size) => {
    state.size = size;
};

export const UPDATE_SIZE = (state,size) => {
    if (state.sizes.push(size))
    {
        state.success_message = size.message;
    }else {
        state.success_message = '';
    }
};

export const DELETE_SIZE = (state, {id, data}) => {
    if (id){
        state.sizes = state.sizes.filter(item => {
            return item.id !== id
        });

        state.success_message = data.message
    } else {
        state.success_message = '';
    }
};