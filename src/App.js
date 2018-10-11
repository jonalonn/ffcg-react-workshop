import React, { Component } from "react";
import "./App.css";
import Ships from "./components/Ships";
import Button from "./components/Button";

import { getState, sortedByCost } from "./helpers";

class App extends Component {
  state = {
    ships: [],
    fetched: false,
    sorted: []
  };

  async componentDidMount() {
    this.setState({
      ...(await getState())
    });
  }

  sortByCost = () => this.setState({ sorted: sortedByCost(this.state.ships) });

  render() {
    console.log(this.state);
    const { ships, fetched, sorted } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          {fetched ? (
            [
              <Button onClick={this.sortByCost} btnText={"Sort by cost"} key="0"/>,
              <Ships ships={sorted.length !== 0 ? sorted : ships} key="1" />
            ]
          ) : (
            <p>Loading</p>
          )}
        </header>
      </div>
    );
  }
}

export default App;
