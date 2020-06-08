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
    componentDidMount(){
        console.log("componentDidMount");
    }
    render() {
        console.log(123)
        return (
            <div className='listBox'>
                {/* 为什么渲染两次 */}
                <Child {...this.state}></Child>
                {/* {this.state.list.map(item => {
                    console.log(122121)
                return <li key={item.id}>{item.name}</li>
                })} */}
            </div>
        )
    }
}
