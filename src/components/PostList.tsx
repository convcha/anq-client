import * as React from 'react';

type State = {
  delay: number;
  data: string;
};

export class PostList extends React.Component<{}, State> {
  state: State = {
    delay: 0,
    data: '',
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

  render() {
    return (
      <>
        <div>
          <input type={'text'} value={this.state.delay} onChange={(e) => this.handleDelayChange(e.target.value)}/>
          <button onClick={this.handleGet}>GET</button>
        </div>
        <div>
          <textarea
            rows={30}
            cols={100}
            value={this.state.data}
            onChange={(e) => this.handleDataChange(e.target.value)}
          />
        </div>
      </>
    );
  }
}