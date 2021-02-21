import {http, httpFile} from "../../../apiServices/http_services";

export const get_product = ({commit}) => {
    return http().get('product').then(res => {
        commit('GET_PRODUCTS', res.data.products)
    })
};

export const get_subCategories = ({commit}, category_id) => {
    return http().get(`product/getSubCategory/${category_id}`).then(res => {
        commit('PRODUCT_SUB_CATEGORY', res.data.sub_category);
    })
};

export const add_product = ({commit}, data) => {
    return httpFile().post('product/store', data).then(res => {
        commit('STORE_PRODUCT', res.data);
    })
};

export const feature = ({commit}, product_id) => {
    return http().post(`product/feature/${product_id}`).then(res => {
        commit('FEATURE_PRODUCT', res.data);
    })
};

export const approve = ({commit}, product_id) => {
    return http().post(`product/approve/${product_id}`).then(res => {
        commit('APPROVE_PRODUCT', res.data);
    })
};

export const publish = ({commit}, product_id) => {
    return http().post(`product/publish/${product_id}`).then(res => {
        commit('PUBLISH_PRODUCT', res.data);
    })
};

export const edit_product = ({commit}, id) => {
    return http().get(`product/edit/${id}`).then(res => {
        commit('EDIT_PRODUCT', res.data.product);
    })
};

export const product_image_delete = ({commit}, id) => {
    return http().post(`product/deleteProductImage/${id}`).then(res => {
        commit('DELETE_PRODUCT_IMAGE', res.data);
    })
};

export const update_product = ({commit}, {id, data}) => {
    return http().post(`product/update/${id}`, data).then(res => {
        commit('UPDATE_PRODUCT', res.data);
    })
};

export const get_product_image = ({commit}, id) => {
    return http().get(`product/image/${id}`).then(res => {
        commit('PRODUCT_IMAGES', res.data.product_image);
    })
};

export const add_product_image = ({commit}, data) => {
    return httpFile().post('product/image/create', data).then(res => {
        commit('PRODUCT_IMAGE_CREATE', res.data);
    })
};

export const edit_product_image = ({commit}, id) => {
    return http().get(`product/image/edit/${id}`).then(res => {
        commit('PRODUCT_IMAGE_EDIT', res.data.product_image);
    })
};