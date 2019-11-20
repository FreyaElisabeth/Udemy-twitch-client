import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  auth: authReducer,
  //naming of this variable is mandatory for redux-form
  form: formReducer
});
