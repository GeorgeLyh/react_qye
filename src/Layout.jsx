import React from 'react'
import { ChildComponent, ComponentDemo } from './components'


//快速创建  快捷键 1、 rfc  创建 function的 class; 2、 rcc  创建clss的 ract类

export default class Layout extends React.Component {
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
            <div className='layout'>
                <h1>layout</h1>
                <ChildComponent parentState={this.state} handleChange={this.setChildHandle}></ChildComponent>
                <ComponentDemo></ComponentDemo>
            </div>
        )
    }
}