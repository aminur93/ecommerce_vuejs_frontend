export const GET_TAG = (state, tags) => {
    state.tags = tags;
};

export const TAG_STORE = (state, tag) => {
    if (state.tags.push(tag))
    {
        state.success_message = tag.message;
    }else {
        state.success_message = '';
    }
};

export const EDIT_TAG = (state, tag) => {
    state.tag = tag;
};

export const UPDATE_TAG = (state, tag) => {
    if (state.tags.push(tag))
    {
        state.success_message = tag.message;
    }else {
        state.success_message = '';
    }
};

export const DELETE_TAG = (state, {id, message}) => {
    if (id){
        state.tags = state.tags.filter(item => {
            return item.id !== id
        });

        state.success_message = message;
    } else {
        state.success_message = '';
    }
};