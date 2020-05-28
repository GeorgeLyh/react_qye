import React, { Component } from 'react'

let x = 0;
console.log(123)
export default class ClickComponent extends Component {
    constructor() {
        super();
        console.log("执行了constructor")
        this.state = {
            number: 1,
            x: 100
        }
    }
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
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    reduceNum = (n, e) => {
        console.log(e)
        this.setState((prevState) => {
            return {
                x: prevState.x - n - prevState.number
            }
        })
    }
    render() {
        console.log("渲染次数为：", ++x)
        return (
            <div>
                <button onClick={this.addNum}>加1</button>
                <p>{this.state.number}</p>
                <button onClick={this.reduceNum.bind(this, 1)}>减1</button>
                <h2>{this.state.x}</h2>
            </div>
        )
    }
}
