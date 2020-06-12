import React, { Component } from "react";

export default class SlotComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "wang wu",
      isloading: true,
    };
  }
  render() {
    return (
      <ChildComponent>
        <h1 data-position="world">你好，{this.state.name}</h1>
        <h2 isloading={true}>我不好，{this.state.name}</h2>
      </ChildComponent>
    );
  }
}

class ChildComponent extends Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children.filter((item) => {
          return item.props.isloading === true;
        })}
      </div>
    );
  }
}
