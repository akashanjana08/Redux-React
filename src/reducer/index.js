import userReducer from './reducer'
import { combineReducers } from 'redux';

export default combineReducers({
    rootReducer : userReducer,
})