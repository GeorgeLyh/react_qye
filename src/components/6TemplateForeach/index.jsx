import React, { Component } from 'react'
import './style.scss'
import Child from './ChildComponent'
export default class TemplateForeach extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    name: 'xiao Ming',
                    age: 12
                },
                {
                    id: 2,
                    name: 'xiao Li',
                    age: 22
                }
            ]
        }
    }
    render() {
        return (
            <div className='listBox'>
                {this.state.list.map(item => <Child key={item.id} {...item}></Child>)}
            </div>
        )
    }
}
