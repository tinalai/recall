import { combineReducers } from 'redux';
import ClientReducer from './client';

const rootReducer = combineReducers({
  friend: ClientReducer;
});

export default rootReducer;
