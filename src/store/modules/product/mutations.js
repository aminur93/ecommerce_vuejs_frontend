export const GET_PRODUCTS = (state, products) => {
    state.products = products;
};

export const PRODUCT_SUB_CATEGORY = (state, sub_category) => {
    state.sub_categories = sub_category;
};

export const STORE_PRODUCT = (state, product) => {
    if (state.products.push(product))
    {
        state.success_message = product.message;
    }else {
        state.success_message = '';
    }
};

export const FEATURE_PRODUCT = (state, data) => {
    if (state.products.concat(data)){
        state.success_message = data.message;
    } else {
        state.success_message = '';
    }
};

export const APPROVE_PRODUCT = (state, data) => {
    if (state.products.concat(data)){
        state.success_message = data.message;
    } else {
        state.success_message = '';
    }
};

export const PUBLISH_PRODUCT = (state, data) => {
    if (state.products.concat(data)){
        state.success_message = data.message;
    } else {
        state.success_message = '';
    }
};

export const EDIT_PRODUCT = (state, data) => {
    state.product = data
};

export const DELETE_PRODUCT_IMAGE = (state, data) => {
    if (state.products.concat(data)){
        state.success_message = data.message;
    } else {
        state.success_message = '';
    }
};

export const UPDATE_PRODUCT = (state, data) => {
    if (state.products.push(data))
    {
        state.success_message = data.message;
    }else {
        state.success_message = '';
    }
};

export const PRODUCT_IMAGES = (state, product_images) => {
    state.product_images = product_images;
};

export const PRODUCT_IMAGE_CREATE = (state, data) => {
    if (state.product_images.push(data))
    {
        state.success_message = data.message;
    }else {
        state.success_message = '';
    }
};