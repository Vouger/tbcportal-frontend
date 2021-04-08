import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'

import ducksReducers from './ducks'

import history from 'shared/history'

const middleware = [routerMiddleware(history)]

export default createStore(
    combineReducers(ducksReducers),
    composeWithDevTools(applyMiddleware(...middleware))
)