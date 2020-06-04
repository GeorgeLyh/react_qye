import React, { Component, PureComponent } from 'react'

export default class LifecyclesComponent extends PureComponent {
    constructor() {
        super()
        this.state = {
            num: 1,
            arr: [0]
        }
        console.log("constructor")
    }
    static getDerivedStateFromProps() {
        console.log("static getDerivedStateFromProps")
        return null
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    btnClick = () => {
        this.setState(prevState => {
            console.log(prevState)
            return {
                num: prevState.num + 1,
                arr: [...prevState.arr,prevState.num]
            }
        })
    }
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log(nextState,this.state,this.props)
        // return this.state.num != nextState.num
        return false
    } */
    render() {
        console.log(`render:${this.state.num} 次数`)
        return (
            <div>
                <button onClick={this.btnClick}>更新数据</button>
                {this.state.arr.map((item,index)=> {
                    return <h4 key={index}>{item}</h4>
                })}
            </div>
        )
    }
}
