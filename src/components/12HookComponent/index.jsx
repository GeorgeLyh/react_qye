import React, { useState, useEffect } from "react";

//如果你熟悉 React class 的生命周期函数，
//你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

export default function HookComponent() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    count = count + 10;
    document.title = `当前标题为${count}`;
  });
  /*  if (count === 22) {
    useEffect(() => {
      count = 100;
    });
    // 那么 React 怎么知道哪个 state 对应哪个 useState？答案是 React 靠的是 Hook 调用的顺序。
    // 这样写 是会报错的，因为根据 hook的规则：
    // 1、只在最顶层使用 Hook（不要在循环，条件或嵌套函数中调用 Hook）
    // 2、只在 React 函数中调用 Hook
  } */
  let [name, setName] = useState("小李");
  useEffect(() => {
    name = "校长" + count;
  });
  return (
    <div>
      <button className="btn-primary" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span style={{ padding: "0 20px", fontSize: "18px" }}>{count}</span>
      <button className="btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
