import * as types from './action_types';

export function updateMessage(message) {
  return {
    type: types.UPDATE_MESSAGE,
    payload: message
  };
}
