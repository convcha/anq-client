import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { enthusiasm } from './reducers';
import { INITIAL_STATE, StoreState } from './types';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './containers/Hello';
import { log } from 'util';

log('createStore');
const store = createStore<StoreState>(
    enthusiasm,
    INITIAL_STATE);

log('ReactDOM.render');
ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
