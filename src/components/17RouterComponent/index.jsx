import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";

import "./style.scss";

export default class RouterComponent extends Component {
  constructor() {
    super();
    this.state = {
      routerParams: {
        pathname: "/Activity",
        search: "?username=admin",
        hash: "#abc",
        state: { msg: "hello" },
      },
    };
  }
  render() {
      console.log(this.props)
    return (
      <div>
        <BrowserRouter>
          <Route
            path="/test"
            component={() => <div>test- content </div>}
          ></Route>
        </BrowserRouter>
        <BrowserRouter basename="/admin">
          <div className="nav">
            <Link className="linkItem" to="">
              首页
            </Link>
            <Link className="linkItem" to={this.state.routerParams}>
              活动
            </Link>
            <Link className="linkItem" to="/User">
              个人中心
            </Link>
          </div>
          <div className="routerView">
            <Route
              className="routeItem"
              exact
              path="/"
              component={Home}
            ></Route>
            <Route
              className="routeItem"
              path="/Activity"
              component={Activity}
            ></Route>
            <Route className="routeItem" path="/User" component={User}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

class Home extends Component {
  render() {
    return <div> 首页</div>;
  }
}
class Activity extends Component {
    render() {
        console.log(this.props)
    return <div> 活动界面</div>;
  }
}
class User extends Component {
  render() {
    return <div> 个人中心</div>;
  }
}
