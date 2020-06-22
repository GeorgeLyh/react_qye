import React from 'react'
import PropTypes from 'prop-types'

export default function childComponent2(props) {
    return (
        <div className="c">
            {props.customProp}
            {props.children}
        </div>
    )
}

//数据类型检查，如果是function定义的组件，用以下书写方式；如果是class定义的组件，在内部使用静态方法即可；
//可以使得代码更加的健壮 ChildComponent.propTypes 这里的propTypes的首字母 小写；
childComponent2.propTypes = {
    y: PropTypes.number,
    x: PropTypes.number,
    //自定义验证规则，更多使用方法查看npm上给出的文档解释；
    customProp: function (props, propName, componentName) {

    },
}
/*
    如果 x和y传过来的类型不是数字类型的 会报错:
    index.js:1 Warning: Failed prop type: Invalid prop `x` of type `string` supplied to `ChildComponent`, expected `number`.
 */


//设置组件默认值，如果父组件传过来的参数为undefined，就使用默认值，其优先级靠后。
childComponent2.defaultProps = {
    x: 66,
    y: 100
}
