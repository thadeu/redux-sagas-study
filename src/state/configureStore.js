import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '@state'
import rootSaga from '@state/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let middlewares = [ sagaMiddleware ]

export default () => {
  // mount it on the Store
  const store = createStore( rootReducer, composeWithDevTools(
      applyMiddleware(...middlewares)
  ))
  
  // then run the saga
  sagaMiddleware.run(rootSaga)

  return store
}