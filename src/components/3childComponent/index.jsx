import React from 'react'

//1、子组件向父组件传递参数 与父传子参数 是一样的

//2、父组件向子组件传递参数
export default class Subcomponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    transmitParent = () => {
        this.props.handleChange(++this.props.parentState.age)
    }
    render() {
        return (
            <div className='subcomonent'>
                <h2>{this.props.parentState.name}的年龄为{this.props.parentState.age}</h2>
                <button onClick={this.transmitParent}>子组件>父组件年龄+1</button>
            </div>
        )
    }
}