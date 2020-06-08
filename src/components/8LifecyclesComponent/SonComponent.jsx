import React, { Component, PureComponent } from 'react'

export default class SonComponent extends PureComponent {
    constructor(){
        super();
        this.state={

        }
    }
    render() {
        console.log(`render ${this.props.value} `)
        return (
            <div>
                <li style={{padding:"20px",fontSize:"18px",marginTop:"10px",border:"1px solid #eee"}}>{this.props.value}</li>
            </div>
        )
    }
}
