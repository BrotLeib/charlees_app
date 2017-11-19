import { combineReducers } from 'redux';
import Authreducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import SearchReducer from './SearchReducer';

export default combineReducers ({
    auth: Authreducer,
    profile_data: ProfileReducer,
    search: SearchReducer,
});