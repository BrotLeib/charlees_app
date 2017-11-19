import {AsyncStorage} from 'react-native';
import { EMAIL_CHANGED, 
         PASSWORD_CHANGED,
         LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL } from '../actions/types'

const INITIAL_STATE = {
    email: 'super@web.de',
    password: 'Florian5275814',
    error: '',
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            console.log(action, state);
            return {...state, email: action.payload};
        case PASSWORD_CHANGED:
            console.log(action);
            return {...state, password: action.payload};
        case LOGIN_USER:
            console.log(action);
            return {...state, loading: true, error:""};
        case LOGIN_USER_SUCCESS:
            console.log(action);
            console.log(AsyncStorage.getItem('token_id'))
            return {...state, loading: false, email:"", password:""};
        case LOGIN_USER_FAIL:
            console.log(action);
            return {...state, loading: false, error:"Autentifikation fehlgeschlagen"};        
        default:
            return state;
    }
}