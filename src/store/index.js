import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import state from './state';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

// Modules import
import category from './modules/category';
import subCategory from './modules/sub_category';
import brand from './modules/brand';
import tag from './modules/tag';
import color from './modules/color';
import size from './modules/size';
import origin from './modules/origin';
import material from './modules/material';

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

    modules:{
        category,
        subCategory,
        brand,
        tag,
        color,
        size,
        origin,
        material
    }
});