import { dispatchAsync } from 'lib/dispatchAsync';

import * as constants from './constants';
import * as api from './api.js'

export function submitBrief(data) {
  return (dispatch, getState) => {
    return dispatchAsync(dispatch, getState, {
      model: data,
      action: constants.SUBMIT_BRIEF,
      apiRequest: api.submitBrief
    })
  }
}
