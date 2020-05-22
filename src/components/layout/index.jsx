import React from 'react'
// import StyleBox from '../1styleDemo'
import ComponentDemo from '../2componentDemo'

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div className='layout'>
                <h1>layout</h1>
                <ComponentDemo></ComponentDemo>
            </div>
        )
    }
}