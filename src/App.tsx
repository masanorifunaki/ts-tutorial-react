import React, { SyntheticEvent } from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './App.css';

interface AppState {
  count: number;
}

// 第一引数 Props 第二引数 Local State
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increment = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  decrement = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.decrement}>
                -1
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
