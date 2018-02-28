import { applyMiddleware, combineReducers, createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import logger from 'redux-logger';

import hello, { HelloState } from './redux/modules/hello';
import { composeWithDevTools } from 'redux-devtools-extension';

export const appHistory = createHistory();
const router = routerMiddleware(appHistory);

export default createStore(
  combineReducers({
    hello,
    router: routerReducer
  }),
  composeWithDevTools(
    applyMiddleware(router, logger)
  )
);

export type AppState = {
  hello: HelloState
};