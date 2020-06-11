import React, { Component } from "react";

const ChildBox = (ComponentB) => {
  return class ChildCompent extends Component {
    render() {
      return (
        <div>
          下面是高阶内容
          <ComponentB {...this.props}></ComponentB>
        </div>
      );
    }
  };
};

export default ChildBox;
