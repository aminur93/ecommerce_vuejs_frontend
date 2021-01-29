export const GET_BRANDS = (state, brands) => {
    state.brands = brands;
};

export const BRAND_STORE = (state, data)=> {
    if (state.brands.push(data)){
        state.success_message = data.message;
    } else {
        state.success_message = '';
    }

};

export const EDIT_BRAND = (state, brand) => {
    state.brand = brand;
};

export const UPDATE_BRAND = (state, brand) => {
  if (state.brands.push(brand)){
      state.success_message = brand.message;
  }else {
      state.success_message = '';
  }
};

export const DESTROY_BRAND = (state, {id, message}) => {
    if (id){
        state.brands = state.brands.filter(item => {
            return item.id !== id
        });

        state.success_message = message.message;
    } else {
        state.success_message = '';
    }
};