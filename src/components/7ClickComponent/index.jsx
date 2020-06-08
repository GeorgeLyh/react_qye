import React, { Component } from 'react'
let x = 0;
export default class ClickComponent extends Component {
    constructor() {
        super();
        console.log("constructor")
        this.state = {
            number: 1,
            x: 100
        }
    }
   /*  componentWillMount() {
        console.log("2","此生命周期为旧生命周期，不安全，应当移除。")
    } */
    static getDerivedStateFromProps(){
        console.log('static getDerivedStateFromProps')
        return false;
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    //官网推荐的 方法 标准
    addNum = () => {
        let n = 0;
        this.setState((prevState) => {
            console.log("内部执行的次数：", ++n)
            return {
                number: prevState.number + 1
            }
        }, () => {
            console.log("这里是修改后的结果", this.state.number)
        })
        console.log("外部执行this.state.number=", this.state.number)
    }
    reduceNum = (n, e) => {
        this.setState((prevState) => {
            return {
                x: prevState.x - n - prevState.number
            }
        })
    }
    aClick=(e)=>{
        e.preventDefault();
        console.log('sd',e)
    }
    hanldClick=()=>{
        console.log("第二种绑定事件 方式")
        console.log(this.state.number)
    }
    render() {
        console.log("render次数为：", ++x)
        return (
            <div>
                <button onClick={this.addNum}>加1</button>
                <p>{this.state.number}</p>
                <button onClick={this.reduceNum.bind(this, 1)}>减1</button>
                <h2>{this.state.x}</h2>
                <h4>阻止某事件被触发</h4>
                {/* <a href='#' onClick={this.aClick}>触发</a> */}

                <button onClick={(e)=>this.hanldClick(e,'hhh')}>第二种事件方法</button>
                <hr/>
                <button onClick={this.hanldClick}>触发</button>
            </div>
        )
    }
}
