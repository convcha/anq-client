import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import store, { appHistory } from './store';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from './Layout';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <Layout/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();