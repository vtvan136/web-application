import { combineReducers } from 'redux';
import posts from './posts';
import modal from './modal';
import post from './post'
export default combineReducers({
  posts,
  modal,
  post
});
