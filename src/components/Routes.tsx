import * as React from 'react';
import Hello from '../containers/Hello';
import { Route } from 'react-router';
import { ScreensUserList } from '../screens/User/List';
import Dashboard from '../containers/Dashboard';

const Routes: React.SFC = () => (
  <>
    <Route exact={true} path={'/'} component={Dashboard}/>
    <Route path={'/users'} component={ScreensUserList}/>
    <Route path={'/hello'} component={Hello}/>
  </>
);
export default Routes;