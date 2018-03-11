import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import store, { appHistory } from './store';
import './index.css';
import Layout from './components/Layout';
import Routes from './components/Routes';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <Layout>
        <Routes/>
      </Layout>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();