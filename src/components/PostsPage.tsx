import * as React from 'react';
import { log } from 'util';

type State = {
  delay: number;
  data: string;
  users: User[];
};

interface User {
  id: number;
  username: string;
}

interface PostListProps {
  users?: User[];
}

const PostList: React.SFC<PostListProps> = (props) => {
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

export class PostsPage extends React.Component<{}, State> {
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

  handleGet = async () => {
    this.setState({data: ''});
    const response: Response = await fetch(`https://httpbin.org/delay/${this.state.delay}`, {
      method: 'GET'
    });
    const json: string = await response.json();
    this.setState({data: JSON.stringify(json, null, ' ')});
  }

  handleGetUsers = async () => {
    this.setState({users: []});
    const response: Response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: 'GET'
    });
    const users = await response.json() as User[];
    this.setState({users: users});
    users.map((user) => {
      log(user.id.toString());
    });
  }

  render() {
    return (
      <>
        <div>
          <input type={'text'} value={this.state.delay} onChange={(e) => this.handleDelayChange(e.target.value)}/>
          <button onClick={this.handleGet}>GET</button>
        </div>
        <div>
          <textarea
            rows={20}
            cols={80}
            value={this.state.data}
            onChange={(e) => this.handleDataChange(e.target.value)}
          />
        </div>
        <div>
          <button onClick={this.handleGetUsers}>Get users</button>
        </div>
        <div>
          <PostList users={this.state.users}/>
        </div>
      </>
    );
  }
}