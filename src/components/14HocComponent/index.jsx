import React, { Component } from "react";

import ChildComponent from "./ChildCompent";

//HOC中CRA装饰器的知识点=>  还没有明白  为什么要这样写;
class HocComponent extends Component {
  render() {
    return <div>hello {this.props.name}</div>;
  }
}
export default ChildComponent(HocComponent);
