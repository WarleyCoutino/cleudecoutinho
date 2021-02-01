import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'


let middleware = [ReduxThunk];

export const store = createStore( applyMiddleware(...middleware));