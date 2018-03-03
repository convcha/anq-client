import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import store, { appHistory } from './store';
import Hello from './containers/Hello';
import './index.css';
import { Link } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import { ScreensUserList } from './screens/User/List';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <div>
        <div className="HolyGrail-body">
          <main className="HolyGrail-content">
            <Route exact={true} path={'/'} component={Dashboard}/>
            <Route path={'/users'} component={ScreensUserList}/>
            <Route path={'/hello'} component={Hello}/>
          </main>
          <nav className="HolyGrail-nav">
            <ul className={'menu'}>
              <li>
                <Link to={'/'}>Dashboard</Link>
              </li>
              <li>
                <Link to={'/users'}>User</Link>
              </li>
                <li>
                    <Link to={'/hello'}>Hello</Link>
                </li>
            </ul>
          </nav>
          <aside className="HolyGrail-ads">
            Aside
          </aside>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();