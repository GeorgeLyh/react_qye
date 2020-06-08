import React, { Component } from "react";
import "./style.scss";
/**
 * 如果你想寻找包含验证、追踪访问字段以及处理表单提交的完整解决方案，
 * 使用 Formik 是不错的选择。
 */

export default class FormSubmit extends Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
    this.state = {
      name: "1",
      interest: "",
      sex: "",
      btnValue: 1,
    };
  }
  selectChange = (v) => {
    console.log(v);
  };
  inputChange = (e) => {
    //setState 方法是异步的
    let target = this.nameRef.current;
    if (e.keyCode === 13) {
      this.setState(
        (state, props) => {
          return {
            [target.name]: target.value
          };
        },
        () => {
          console.log(this.state.name);
        }
      );
    }
  };
  textChange = (e) => {
    this.setState((prevSatate, props) => ({
      interest: prevSatate.interest,
    }));
  };
  submitForm = (e) => {
    debugger;
  };
  onClick = () => {
    /**
     * setState是一个异步操作
     * 执行顺序是  执行顺序a -> 执行顺序b
     * 这样书写 setState的结果 并没有真正被改变，界面的值改变了
     */
    // let n = this.state.btnValue+1
    // this.setState({
    //     btnValue: n
    // }, () => {
    //     console.log(this.state.btnValue, "执行顺序b")
    // })
    // console.log(this.state.btnValue, "执行顺序a")
    debugger;
    /**
     * 第二种处理方式
     *
     */
    this.setState(
      (prevSatate, props) => ({
        btnValue: prevSatate.btnValue + 1,
      }),
      () => {
        // console.log(this.state.btnValue, "执行顺序b")
      }
    );
    // console.log(this.state.btnValue, "执行顺序a")
  };
  submit =(e)=>{
    debugger
    console.log(this.state.name)
    e.preventDefault();
  }
  render() {
    return (
      <div className="formBox">
        <form onSubmit={this.submit}>
          <label className="form-item">
            <span className="form-label">名称</span>
            {/* defaultValue={this.state.name} 的话，不会报 没有onChange的异常*/}
            <input
              defaultValue={this.state.name}
              type="text"
              name="name"
              ref={this.nameRef}
              onKeyDown={this.inputChange}
            />
            <p>{this.state.name}</p>
          </label>
          <label className="form-item">
            <span className="form-label">兴趣爱好</span>
            <textarea
              value={this.state.interest}
              placeholder="请输入"
              onChange={this.textChange}
            ></textarea>
          </label>
          <label className="form-item">
            <span className="form-label">性别</span>
            <select value={this.state.sex} onChange={this.selectChange}>
              <option value="1" label="男">
                男
              </option>
              <option value="2" label="女">
                女
              </option>
              <option value="3" label="gap">
                gap
              </option>
            </select>
          </label>
          <input type="submit" value="提交" />
        </form>
        <button onClick={this.onClick}>按钮</button>
        <h2>{this.state.btnValue}</h2>
      </div>
    );
  }
}
