import * as React from 'react';

type State = {
  delay: number;
  data: string;
  users: User[];
};

interface UserListProps {
  users?: User[];
  data: string;
  getData: (delay: number) => Promise<void>;
}

const List: React.SFC<{users: User[]}> = (props) => {
  const { users } = props;

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

export class UserList extends React.Component<UserListProps, State> {
  state: State = {
    delay: 0,
    data: '',
    users: [],
  };

  handleDelayChange = (delay: string) => {
    const n = Number(delay);
    if (isNaN(n)) {
      alert(`${delay}は数値ではありません！`);
      return;
    }
    this.setState({delay: parseInt(delay, 10)});
  }

  handleDataChange = (data: string) => {
    this.setState({data: data});
  }

  handleGetUsers = async () => {
    this.setState({users: []});
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET'
    });
    const users = await response.json() as User[];
    this.setState({users: users});
  }

  render() {
    return (
      <>
        <div>
          <input type={'text'} value={this.state.delay} onChange={(e) => this.handleDelayChange(e.target.value)}/>
          <button onClick={() => this.props.getData(this.state.delay)}>GET</button>
        </div>
        <div>
          <textarea
            rows={20}
            cols={80}
            value={this.props.data}
            onChange={(e) => this.handleDataChange(e.target.value)}
          />
        </div>
        <div>
          <button onClick={this.handleGetUsers}>Get users</button>
        </div>
        <div>
          <List users={this.state.users}/>
        </div>
      </>
    );
  }
}