import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    static propTypes = {
        x: PropTypes.number,
        y: PropTypes.number
    }
    //系统自带方法，如果props.name为空，就会使用name="备胎武大郎" 这个值；
    static defaultProps = {
        name: '备胎武大郎'
    }
    transmitParent = () => {
        this.props.handleChange(++this.props.parentState.age)
    }
    render() {
        return (
            <div className='subcomonent'>
                <h1>如果往子组件里面传数字的话，并且做数值运算的话，需要在父级用花括号括起来 </h1>
                {/* this.props.x(==1) + this.props.y(==2) = {this.props.x + this.props.y} */}
                <h2>{this.props.name}的年龄为{this.props.age}</h2>
                <button onClick={this.transmitParent}>子组件>父组件年龄+1</button>
                <h3>以下显示的是父级传过来的模板:</h3>
                {this.props.children}
            </div>
        )
    }
}
