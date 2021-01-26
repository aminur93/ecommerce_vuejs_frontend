export const SET_SUBCATEGORY = (state, data) => {
    state.sub_categories = data
};

export const STORE_SUBCATEGORY = (state, data) => {
    state.sub_categories.push(data);
};

export const EDIT_SUBCATEGORY = (state, data) => {
    state.sub_category = data;
};

export const SET_UPDATE_SUBCATEGORY = (state, data) => {
    state.sub_categories.push(data);
};

export const DELETE_SUBCATEGORY = (state, id) => {
    state.sub_categories = state.sub_categories.filter(item => {
        return item.id !== id;
    })
};