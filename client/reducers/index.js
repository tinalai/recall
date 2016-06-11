import { combineReducers } from 'redux';
import FriendReducer from './friend';

const rootReducer = combineReducers({
  friend: FriendReducer
});

export default rootReducer;
