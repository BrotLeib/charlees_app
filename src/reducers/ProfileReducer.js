import { AsyncStorage } from 'react-native';

import { PROFILE_LOAD, 
         PRODUCTS_LOAD,
         SELECT_PRODUCT } from '../actions/types';

const INITIAL_STATE = {
    profile: '',
    products: '',
    selectedProductId: '00',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_LOAD:
            console.log(action, state);
            return {...state, profile: action.payload};
        case PRODUCTS_LOAD:
            console.log(action, state);  
            return {...state, products: action.payload};
        case SELECT_PRODUCT: 
            console.log(action, state);   
            return {...state, selectedProductId: action.payload}
        default:
            return state;
    }
}