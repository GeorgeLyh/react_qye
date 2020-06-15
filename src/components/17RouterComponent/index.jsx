import React, { Component } from "react";
import { Route, Link, BrowserRouter, Redirect } from "react-router-dom";
//#region
//路由的三大核心组件：Route, Link, BrowserRouter
//路由重定向组件：Redirect
//#endregion
import "./style.scss";



export default class RouterComponent extends Component {
  constructor() {
    super();
    /**
     * 路由参数 可以传这些
     *  hash: ""
        key: "1at5m2"
        pathname: "/"
        search: ""
        state: undefined
    */
    this.state = {
      isRedirect: false,
      routerParams: {
        pathname: "/Activity",
        search: "?username=admin",
        hash: "#abc",
        state: { msg: "hello" },
      },
      redirectParams: {
        pathname: "/LoginApp",
        state: {
          isRedirect: false,
        },
      },
    };
  }
  signIn = () => {
    this.setState({
      isRedirect: false,
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <BrowserRouter>
          <Route
            path="/test"
            component={() => <div>test- content </div>}
          ></Route>
        </BrowserRouter>
        <BrowserRouter>
          <div className="nav">
            <Link className="btn btn-primary" to={this.state.redirectParams}>
              登录
            </Link>
            <Link className="linkItem" to="">
              首页
            </Link>
            <Link className="linkItem" to={this.state.routerParams}>
              活动
            </Link>

            {/* replace 就是替换，如果依次点击首页 > 活动 > 个人中心，然后回退的话，此时会回到 首页（"/"）*/}
            <Link className="linkItem" to="/User" replace>
              个人中心
            </Link>
            <Link className="linkItem" to="/News/123">
              新闻中心
            </Link>
          </div>
          {/* exact 精准匹配 */}
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
            <Route
              className="routeItem"
              path="/News/:id"
              component={News}
            ></Route>
            <Route
              className="routeItem"
              path="/login"
              component={() => <div>登录界面</div>}
            ></Route>
            <Route
              className="routeItem"
              path="/404"
              component={() => <div>找不到界面</div>}
            ></Route>
            <Route component={LoginApp} path="/LoginApp"></Route>
            {/* <Redirect to={this.state.isRedirect?"/":"/login"}></Redirect> */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function News(props) {
  console.log(props.match.params);
  return <div>新闻中心 新闻id：{props.match.params.id}</div>;
}

function LoginApp(props) {
  if (props.location.state.isRedirect) {
    return <Redirect to="/"></Redirect>;
  } else {
    return <Redirect to="/404"></Redirect>;
  }
}
class Home extends Component {
  render() {
    console.log(this.props);
    return <div> 首页</div>;
  }
}
class Activity extends Component {
  render() {
    console.log(this.props);
    return <div> 活动界面</div>;
  }
}
class User extends Component {
  render() {
    return <div> 个人中心</div>;
  }
}
