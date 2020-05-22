import React from 'react'
import StyleBox from '../1样式'

export default class Layout extends React.Component{
    constructor(){
        super();
        this.state={}
    }
    render(){
        return(
            <div className='layout'>
                <h1>layout</h1>
                <StyleBox></StyleBox>
            </div>
        )
    }
}