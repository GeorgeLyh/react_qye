import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor() {
        super()
        this.state = {}
    }
    componentDidMount() {
        console.log("childComponent加载完")
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.num === nextProps.num) {
            //不做渲染
            return false
        }
    }
    render() {
        return (
            <div className='itemLi'>
                {this.props.name}的年龄为{this.props.age}
            </div>
        )
    }
}
