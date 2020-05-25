import React, { Fragment, Component } from 'react'
import ChildBox from './ChildComponent'
import ChildNestingBox from './ChildComponent2'


//1、子组件向父组件传递参数 与父传子参数 是一样的

//2、父组件向子组件传递参数
export default class Subcomponent extends Component {
    constructor() {
        super();
        this.state = {
            name: 'parent>>child>>张三',
            age: 12,
            value: 'test值',
            x: 1,
            y: 2
        }
    }
    state2 = {
        title: '自定义state2'
    }
    setChildHandle = (...args) => {
        this.setState({
            age: args[0]
        })
    }
    render() {
        /* 嵌套模板 类似 vue里面的插槽 */
        return (
            <Fragment>
                <p style={{ color: 'red',fontSize:'22px'}}>{this.state2.title}</p>
                <ChildBox name={this.state.name} age={this.state.age} handleChange={this.setChildHandle} x={1} y={5}>
                    <p>class嵌套模板>>{this.state.value}</p>
                </ChildBox>
                <ChildNestingBox customProp='hello' x={33} y={66}>
                    <h2>嵌套模板</h2>
                </ChildNestingBox>
            </Fragment>
        )
    }
}