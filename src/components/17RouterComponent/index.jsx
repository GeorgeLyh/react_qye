import React, { Component } from "react";
import { Route, Link, BrowserRouter, Redirect, Switch } from "react-router-dom";
//#region
//路由的三大核心组件：Route, Link, BrowserRouter
//路由重定向组件：Redirect
//#endregion
import "./style.scss";

//Switch组件 只要 匹配到了 文件就停止向下匹配;

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
            <Switch>
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
              <Route
                className="routeItem"
                path="/User"
                component={User}
              ></Route>
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
              <Route
                component={ChildComponent2}
                exact
                path="/ChildComponent2"
              ></Route>
              {/* <Redirect to={this.state.isRedirect?"/":"/login"}></Redirect> */}
            </Switch>
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

class ChildComponent2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "btn子级",
    };
  }
  toPage = () => {
    // 跳转界面
    //this.props.history的方法有 ：
    //前进 go(1)  goForward
    //后退  go(-1)  goBack
    //指定跳转 push
    // 待测方法  glisten createHref block
    this.props.history.push("/User", this.state);
    // this.props.history.replace("/User", this.state);//不能后退
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.toPage}>
          通过按钮跳转界面
        </button>
      </div>
    );
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
    console.log(this.props);
    return <div> 个人中心</div>;
  }
}
