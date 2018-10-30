import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import intl from 'modules/_meta/intl/reducers';

import { combineForms } from 'react-redux-form';
import { reducer as modal } from 'redux-modal';


const loggerMiddleware = createLogger({
  // ...options
});

const reducers = combineForms({
  intl,
  modal
})

export default function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  );
}
