import { applyMiddleware, combineReducers, createStore } from 'redux';
import hello, { HelloState } from './redux/modules/hello';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';

export const appHistory = createHistory();
const middleware = routerMiddleware(appHistory);

export default createStore(
    combineReducers({
        hello,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);

export type AppState = {
    hello: HelloState
};