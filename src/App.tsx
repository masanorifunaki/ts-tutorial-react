import React from 'react';
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './App.css';

const LIMIT = 60;

interface AppState {
  timeLeft: number;
}

// 第一引数 Props 第二引数 Local State
class App extends React.Component<{}, AppState> {
  timerId?: NodeJS.Timer;

  constructor(props: {}) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  reset = () => {
    this.setState({ timeLeft: LIMIT });
  };

  tick = () => {
    this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
  };

  // コンポーネントがマウントされた直後に
  // 呼ばれる
  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  // コンポーネントが変更された直後に呼ば
  // れる
  componentDidUpdate = () => {
    const { timeLeft } = this.state;
    if (timeLeft === 0) {
      this.reset();
    }
  };

  // コンポーネントがアンマウントされる直
  // 前に呼ばれる
  componentWillUnmount = () => {
    clearInterval(this.timerId as NodeJS.Timer);
  };

  render() {
    const { timeLeft } = this.state;

    return (
      <div className="container">
        <header>
          <h1>タイマー</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>time</Statistic.Label>
            <Statistic.Value>{timeLeft}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <Button color="red" onClick={this.reset}>
              <Icon name="redo" />
              Rest
            </Button>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
