import { combineReducers, createStore } from 'redux';
import hello, { HelloState } from './redux/modules/hello';

export default createStore(
    combineReducers({
        hello
    })
);

export type AppState = {
    hello: HelloState
};