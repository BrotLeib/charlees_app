import { AsyncStorage } from 'react-native';

import { PROFILE_LOAD, 
         PRODUCTS_LOAD,
         SELECT_PRODUCT, } from './types';

export const loadAllProfileData = ({navigate}) => {
    return (dispatch) => {
        dispatch(profileLoad())
            .then(() => dispatch(productsLoad()))
                .then(() => navigate('MainMenue'))
    };
}

export const profileLoad = () => {        
            return (dispatch) => {
                return AsyncStorage.getItem('token_id')
                .then((token_id) => fetch("http://10.0.2.2:8000/api/profile/", {
                    method: "GET",
                    headers: {
                    'Authorization': 'JWT ' + token_id
                    }
                }))
                    .then((response) => response.json())
                        .then((answer) => {
                        dispatch({ type: PROFILE_LOAD, payload: answer});
                        })
            
            }  
        }

         
export const productsLoad = () => {
     return (dispatch) => {
         return AsyncStorage.getItem('token_id')
         .then((token_id) => 
             fetch("http://10.0.2.2:8000/api/profile/products/", {
                 method: "GET",
                 headers: {
                 'Authorization': 'JWT ' + token_id
                 }
            }))
                .then((answer) => answer.json())
                    .then((response)=> {
                        dispatch ({ type: PRODUCTS_LOAD, payload: response})
                    })       
     }  
}

export const selectProduct = (selectedProductId) => {
    return {
        type: SELECT_PRODUCT,
        payload: selectedProductId,
    };
};
    

