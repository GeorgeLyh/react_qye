import React, { Component } from "react";
import { getList } from "../../services/getData";

export default class AjaxComponent extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    getList()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <li className="itemLi" key={item.id}>
            {item.title}
          </li>
        ))}
      </div>
    );
  }
}
