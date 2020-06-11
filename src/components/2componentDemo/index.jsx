import React from 'react';

//推荐** 通过继承 react里面的Component类  来定义组件
export default class ComponentDemo extends React.Component{
    constructor(){
        super()
        this.state={
            name:'张三',
            pHtml:'<h2>你好</h2>'
        }
    }
    render(){
        return(
            <div>
                <p>通过class来定义的组件{this.state.name}</p>
                {this.state.pHtml}
                <div dangerouslySetInnerHTML={{__html:this.state.pHtml}}></div>
            </div>
        )
    }
}

//第二种 就是通过function的形式
//这样定义没有上面的 constructor 等方法，但是这个的性能会好一点，毕竟东西也少；
// export default function ComponentDemo2(){
//     return(
//         <div>
//             <h2>通过function的形式来 定义组件</h2>
//         </div>
//     )
// }