export const GET_MATERIAL = (state, materials) => {
    state.materials = materials;
};

export const STORE_MATERIAL = (state, data) => {
    if (state.materials.push(data)){
        state.success_message = data.message;
    } else {
        state.success_message = '';
    }
};

export const EDIT_MATERIAL = (state, data) => {
    state.material = data;
};

export const UPDATE_MATERIAL = (state, data) => {
    if (state.materials.push(data)){
        state.success_message = data.message;
    } else {
        state.success_message = '';
    }
};

export const DELETE_MATERIAL = (state, {id,data}) => {
    if (id){
        state.materials = state.materials.filter(item => {
            return item.id !== id
        });

        state.success_message = data.message;

    } else {
        state.success_message = '';
    }
};