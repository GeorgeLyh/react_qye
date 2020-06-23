//redux和react-redux区别    需要理解

//创建一个新分支 并在新分支 进行 react-redux的知识 开发
import React, { Component } from "react";
import PropTypes from "prop-types"; //参数类型验证
import { connect } from "react-redux";

class ReactreduxBox extends Component {
  constructor(){
    super();
    this.state = {
      arr:[
        {
          id:1,
          text:'todo编号1',
          type:''
        }
      ]
    }
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>react-redux操作展示</h1>
        {
          this.state.arr.map(item=>{
          return <h5 key={item.id}>{item.text}</h5>
          })
        }
        <div>
          
          <button type="button" className="btn btn-primary" onClick={this.props.addTodo}>添加数据</button>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{

  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    addTodo:()=>{dispatch({type:'ADD_TODO'})}
  }
};

let ReactreduxComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactreduxBox);

export default ReactreduxComponent;
