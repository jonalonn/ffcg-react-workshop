import React, { Component } from "react";
import "./App.css";
import Ships from "./components/Ships";
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
              <button onClick={this.sortByCost} key="0">
                Sort by cost
              </button>,
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
