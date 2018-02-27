import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import intl from '../modules/intl/reducers'
import header from '../modules/common/header/reducers'

export const initStore = (initialState = {}) => {
  return createStore(
    combineReducers({
      intl,
      header
    }),
    initialState,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware)
    )
  )
}
