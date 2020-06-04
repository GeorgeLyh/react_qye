import React, { Component } from 'react'
/**
 * 条件渲染
*/
function Getten (params){
    if(!params.isVisible){
        return null;
    }
    return (
        <div>
            <h2>你好；</h2>
        </div>
    )
}
export default class IfRenderComponent extends Component {
    constructor(){
        super();
        this.state={
            isShow:false,
            isVisible:true,
            isRenderValue:true
        }
    }
    ifRender=(v)=>{
        if(!!v){
            return <div>11111</div>
        }else{
            return <div>2222</div>
        }
    }
    render() {
        return (
            <div>
                {/* 第一种方法 用js 中的if 来判断 */}
                {this.ifRender(this.state.isShow)}
                {/* 第二种方法 用与运算符 Boolean && jsx */}
                {!this.state.isShow && <div>33333333</div>}
                {/* 第三种方法 三目运算符 */}
                {this.state.isVisible?<div>44444</div>:<div>55555555</div>}
                {/* 阻止渲染的方式 return null */}
                <Getten isVisible = {this.state.isRenderValue}/>
            </div>
        )
    }
}
