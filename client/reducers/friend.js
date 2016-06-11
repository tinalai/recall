import * as types from '../actions/action_types';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.UPDATE_MESSAGE:
      return [action.payload];
    default:
      return state;
  }
}
