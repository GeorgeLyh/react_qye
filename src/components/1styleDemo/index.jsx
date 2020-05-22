import React from 'react'
import './style.scss';
import cssobj from './style2.module.css';
console.log(cssobj)

//第一种 内联样式
let styleObj = {
    color: 'red',
    background: '#fff',
    padding: '10px'
}


//第二种外联样式>>>>
//第1种使用module的形式 命名（index.module.css）；
//第2种就是sass的 scss后缀名的形式。


export default class StyleBox extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className='container'>
                <h2>style样式基础知识</h2>
                <p style={styleObj}>
                    内联样式
                </p>
                <p className='txtBox spanFont'>
                    外联样式第一种 scss后缀文件
                </p>
                <div className={`${cssobj.txtBox2} ${cssobj.spanFont}`}>
                    外联样式第二种 .style.module.css形式的引用
                    <h5>在class值有“文件名_类名_5位哈希值”组成>>style2_txtBox2__3_VP6</h5>
                </div>
            </div>
        )
    }
}