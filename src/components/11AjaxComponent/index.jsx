import React, { PureComponent } from "react";
import { getTodos } from "../../services/getData";

export default class AjaxComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      list: [],
      isLoading: false,
    };
  }

  /*   shouldComponentUpdate() {
    return false;
  } */

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    getTodos()
      .then((response) => {
        this.setState({
          list: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }
  checkChange = (e, row) => {
    this.setState((prevState) => {
      return {
        list: prevState.list.map((item, index) => {
          if (item.id === row.id) {
            item.title = item.title + index;
          }
          return item;
        }),
      };
    });
  };
  render() {
    console.log([...this.state.list]);
    return (
      <div>
        {this.state.list.map((item) => (
          <li className="itemLi" key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={(e) => this.checkChange(e, item)}
            ></input>
            <span className="checkBoxValue">{item.title}</span>
          </li>
        ))}
      </div>
    );
  }
}
