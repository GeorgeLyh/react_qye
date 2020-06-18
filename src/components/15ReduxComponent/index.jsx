import React, { Component } from 'react'
// cnpm i --save redux 


import {store}  from '../../redux/store'
import * as actions from "../../redux/actions"
console.log(store)
export default class ReduxComponent extends Component {
    constructor(){
        super();
        console.log(store.getState())
        this.state = store.getState()
        
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                age:store.getState().age
            })
        })
    }
    render() {
        return (
            <div>
                <p>姓名：{this.state.name} <br/> 年龄：{this.state.age}</p>
                <button className="btn btn-primary" style={{marginRight:'15px'}} onClick={()=>{store.dispatch(actions.add(4))}}>加1</button>
                <button className="btn btn-primary" onClick={()=>{store.dispatch(actions.del(2))}}>减1</button>
            </div>
        )
    }
}
