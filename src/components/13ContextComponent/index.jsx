import React, { Component, createContext } from "react";
import { Consumer } from "../../App";

console.log(createContext());

const { Provider, Consumer: MyConsumer } = createContext();

export default class ContextComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  addCount = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <Provider value={this.state.count}>
          <Consumer>
            {(value) => {
              console.log(value);
              return <div>{value.name}</div>;
            }}
          </Consumer>
          <button onClick={this.addCount} className="btn btn-primary">
            +
          </button>
          <BtnComponent></BtnComponent>
        </Provider>
      </div>
    );
  }
}

class BtnComponent extends Component {
  render() {
    return (
      <MyConsumer>
        {(props) => {
          return <div>MyConsumer:{props}</div>;
        }}
      </MyConsumer>
    );
  }
}
