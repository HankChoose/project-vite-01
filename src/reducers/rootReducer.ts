// rootReducer.js
import { combineReducers } from 'redux';
import userInfoReducer from './userInfoReducer';
import userInfo2Reducer from './userInfo2Reducer';

const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  userInfo2: userInfo2Reducer,
});

export default rootReducer;
