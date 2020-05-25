import React, { Component } from 'react'

export default class ChildComponent extends Component {
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
