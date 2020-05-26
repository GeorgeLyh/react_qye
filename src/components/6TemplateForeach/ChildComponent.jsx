import React, { Component } from 'react'

export default class ChildComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='itemLi'>
                {this.props.name}的年龄为{this.props.age}
            </div>
        )
    }
}
