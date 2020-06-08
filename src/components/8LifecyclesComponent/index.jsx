import React, { Component } from "react";
import SonComponent from './SonComponent'


export default class LifecyclesComponent extends Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      nameList: [
        {
          name: "小明",
          id: 1,
        },
        {
          name: "小王",
          id: 2,
        },
      ],
    };
  }
  /* static getDerivedStateFromProps() {
        return null
    } */
  componentDidMount() {
    // console.log("componentDidMount")
  }
  btnClick = () => {
   /*  this.setState((prevState) => {
      return {
        num: prevState.num + 1,
        nameList: prevState.nameList.concat([{name:'小李'+prevState.num,id:2+prevState.num}]),
      };
    },()=>{
        console.log(this.state)
    }); */
    let arr = this.state.nameList.concat([{name:'小李',id:3}]);
    this.setState({
        num:3,
        nameList: arr,
      });
  };
  /*  shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState,this.state,this.props)
        // return this.state.num != nextState.num
        // return false
    } */
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.btnClick}>更新数据</button>
        {
            this.state.nameList.map(item=><SonComponent value={item.name} key={item.id}></SonComponent>)
        }
      </div>
    );
  }
}
