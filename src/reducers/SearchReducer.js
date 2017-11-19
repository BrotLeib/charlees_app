import { AsyncStorage } from 'react-native';

import { NUMBER_CHANGED,
         NUMBER_LOOKUP } from '../actions/types';

const INITIAL_STATE = {
    number: '',
    status: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NUMBER_CHANGED:
            console.log(action, state);
            return {...state, number: action.payload};
        case NUMBER_LOOKUP:
            console.log(action, state);
            return {...state, status: action.payload};
        default:
            return state;
    }
}