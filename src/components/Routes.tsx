import * as React from 'react';
import { Route } from 'react-router';
import Dashboard from '../containers/Dashboard';
import Hello from '../containers/Hello';
import { ScreensUserList } from '../screens/User/List';
import SurveyList from './Survey/SurveyList';

const Routes: React.SFC = () => (
  <>
    <Route exact={true} path={'/'} component={Dashboard}/>
    <Route path={'/surveys'} component={SurveyList}/>
    <Route path={'/users'} component={ScreensUserList}/>
    <Route path={'/hello'} component={Hello}/>
  </>
);
export default Routes;