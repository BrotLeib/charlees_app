import { EMAIL_CHANGED, 
         PASSWORD_CHANGED,
         LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = () => {
        return{
            type: LOGIN_USER,
        };
    };



export const loginUserSuccess = () => {
    return{
        type: LOGIN_USER_SUCCESS,
    };
};

export const loginUserFail = () => {
    return {
        type: LOGIN_USER_FAIL,
    };
};
