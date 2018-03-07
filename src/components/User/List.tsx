import * as React from 'react';
import { UserListActionDispatcher } from '../../redux/modules/User/UserList';

interface UserListProps {
  delay: number;
  users?: User[];
  data: string;
  actions: UserListActionDispatcher;
}

const List: React.SFC<{ users?: User[] }> = (props) => {
  const {users} = props;

  if (users === undefined || users.length === 0) {
    return (
      <div>Loading..</div>
    );
  }

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>{`${user.id}: ${user.username}`}</li>
        );
      })}
    </ul>
  );
};

export const UserList: React.SFC<UserListProps> = (props) => {
  // handleGetUsers = async () => {
  //   this.setState({users: []});
  //   const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
  //     method: 'GET'
  //   });
  //   const users = await response.json() as User[];
  //   this.setState({users: users});
  // }

  return (
    <>
      <div>
        <input type={'text'} value={props.delay} onChange={(e) => props.actions.onDelayChange(e.target.value)}/>
        <button onClick={() => props.actions.getData(props.delay)}>GET</button>
      </div>
      <div>
          <textarea
            rows={20}
            cols={80}
            value={props.data}
            // onChange={(e) => this.handleDataChange(e.target.value)}
          />
      </div>
      <div>
        <button>Get users</button>
      </div>
      <div>
        <List users={props.users}/>
      </div>
    </>
  );
};