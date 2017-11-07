/*
 *
 * userInputReducer reducer
 *
 */

import { fromJS } from 'immutable';

import {
  DO_SOMETHING,
} from './constants';

const initialState = fromJS({
  bla: '',
});

function userInputReducer(state = initialState, action) {
  switch (action.type) {
    case DO_SOMETHING:
      return state
        .set('bla', action.bla);
    default:
      return state;
  }
}

export default userInputReducer;
