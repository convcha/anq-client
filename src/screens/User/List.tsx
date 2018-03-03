import * as React from 'react';
import { UserList } from '../../components/User/List';

export const ScreensUserList: React.SFC<{}> = () => {
  return (
    <div>
      <h1>User List</h1>
      <UserList/>
    </div>
  );
};
