import axios from 'axios';
import * as types from './action_types';

export function addNewFriend(name) {
  console.log(name);
  const request = axios.post('/api/friends', { nickname: name });
  return {
    type: types.ADD_NEW_FRIEND,
    payload: request
  };
}

export function updateMessage(message) {
  return {
    type: types.UPDATE_MESSAGE,
    payload: message
  };
}
