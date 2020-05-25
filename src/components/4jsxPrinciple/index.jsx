import React from 'react'
//通常书写 react组件是这样
class ChildComponent extends React.Component {
    render() {
        return (
            <div className='box'>
                <h1 name='标题' title='提示'>jsx原理</h1>
                <p content='内容'>
                    jsx等于js+xml,render()方法里面等价 React.createElement()来创建元素
                </p>
            </div>
        )
    }
}
// 虚拟DOM 
let fictitiousDom = {
    tag: 'div',
    attr: {
        class: 'box'
    },
    children: [
        {
            tag: 'h1',
            attr: {
                name: '标题',
                title: '提示'
            },
            txt: 'jsx原理'
        },
        //...
    ]
}
//jsx原理 >>还原 ChildComponent1
class ChildComponent1 extends React.Component {
    render() {
        return (
            /*  createElement方法有很多 参数，前两个参数是固定的，第一个是标签名，第二个是标签属性
                React.createElement(
                    type,
                    [props],
                    [...children]
                )
                React.cloneElement() 几乎等同于：
                <element.type {...element.props} {...props}>{children}</element.type> 
            */
            React.createElement(
                'div',
                {
                    className: 'box'
                },
                React.createElement(
                    'h1',
                    {
                        name: '标题',
                        title: '提示'
                    },
                    "jsx原理"
                )
            )
        )
    }
}

export default ChildComponent;