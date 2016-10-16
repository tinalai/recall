import axios from 'axios';
import * as types from './action_types';

export function newFriend(nickname, first, last) {
  const request = axios.post('/api/friends', {nickname: nickname, first: first, last: last});
}

export function updateMessage(message) {
  return {
    type: types.UPDATE_MESSAGE,
    payload: message
  };
}
