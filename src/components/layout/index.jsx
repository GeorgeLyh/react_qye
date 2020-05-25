import React from 'react'
import ChildComponent from '../3childComponent'
import ComponentDemo  from '../4jsxPrinciple'

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state={
            name:'parent>>child>>张三',
            age:12
        }
    }
    setChildHandle=(...args)=>{
        this.setState({
            age:args[0]
        })
    }
    render(){
        return(
            <div className='layout'>
                <h1>layout</h1>
                <ChildComponent parentState={this.state} handleChange={this.setChildHandle}></ChildComponent>
                <ComponentDemo></ComponentDemo>
            </div>
        )
    }
}