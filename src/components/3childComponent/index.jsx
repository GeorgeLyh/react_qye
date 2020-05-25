import React from 'react'
import ChildBox from './ChildComponent'
//1、子组件向父组件传递参数 与父传子参数 是一样的

//2、父组件向子组件传递参数
export default class Subcomponent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'parent>>child>>张三',
            age: 12
        }
    }
    setChildHandle = (...args) => {
        this.setState({
            age: args[0]
        })
    }
    render() {
        return (
            <div className='subcomonent'>
                <ChildBox  parentState={this.state} handleChange={this.setChildHandle}/>
            </div>
        )
    }
}