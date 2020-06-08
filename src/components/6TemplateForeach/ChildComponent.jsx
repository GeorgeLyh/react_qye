import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "王麻子",
    };
  }
  componentDidMount() {
    console.log("childComponent加载完");
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.num === nextProps.num) {
      //不做渲染
      return false;
    }
  }
  handleClick = () => {
    this.setState({
      name: "李逵",
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.list.map((item) => {
          return (
            <li className="itemLi" key={item.id}>
              {item.name} 的年龄为 {item.age}
            </li>
          );
        })}
        
        <button onClick={this.handleClick} className="btn btn-primary">
          改变事件
        </button>
      </div>
    );
  }
}
