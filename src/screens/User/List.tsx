import * as React from 'react';
import UserListContainer from '../../containers/User/UserListContainer';

export const ScreensUserList: React.SFC<{}> = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserListContainer/>
    </div>
  );
};