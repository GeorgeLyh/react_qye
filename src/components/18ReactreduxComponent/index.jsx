//redux和react-redux区别    需要理解

import React, { Component } from "react";
import { checkPropTypes } from "prop-types";//参数类型验证

export default class ReactreduxComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>react-redux操作展示</h1>
       
      </div>
    );
  }
}
