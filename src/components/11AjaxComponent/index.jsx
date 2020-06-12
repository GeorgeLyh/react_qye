import React, { PureComponent } from "react";
import { getTodos ,getWeather} from "../../services/getData";
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
    //获取天气网的数据 线上第三方 数据库，涉及跨域问题  需要在config/webpackDevServer.config.js 里面配置 proxy  
    getWeather().then(response=>{
      console.log(response)
    }).catch(error=>{

    })
    //还需要测试  本地服务数据  的连接 测试；mock文件里面 data.json


    //获取第三方网站的数据  这里不涉及跨域
    /* getTodos()
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
      }); */
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
    // console.log([...this.state.list]);
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
