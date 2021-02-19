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