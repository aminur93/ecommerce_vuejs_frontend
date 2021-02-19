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