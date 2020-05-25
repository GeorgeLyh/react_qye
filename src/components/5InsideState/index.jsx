import React, { Component } from 'react'

export default class InsideState extends Component {
    obj = {
        name:"小明",
        age:12
    }
    tgk = {
        attr:'属性',
        kegen:'hello'
    }
    constructor(){
        super()
        this.state={
            title:'哈哈哈'
        }
    }
    addNum=()=>{
        this.setState({
            title:'不哈哈了'
        })
    }
    render() {
        return (
            <div>
                <h2 style={{color:'green'}}>{this.state.title}</h2>
                {this.obj.name}>突然来了一句：
                我<h3>{this.obj.age}岁了</h3>
                <h2>{this.tgk.kegen}</h2>
                <button onClick={this.addNum}>增加年龄</button>
            </div>
        )
    }
}
