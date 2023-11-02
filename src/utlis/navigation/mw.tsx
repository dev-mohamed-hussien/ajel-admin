import React, { ReactNode } from "react";
function processFuncArray(Component, funcs, callback) {
  let index = 0;
  // debugger
  function next(x) {
    index++;
    if (index < funcs.length) {
      return funcs[index](Component, next);
    } else {
      return callback(Component);
    }
  }
  return funcs[index](Component, next);
}

export default function middleware(Component, arrs) {
  return (props) => {

if(arrs.length===0 || !arrs){
  return <Component />
}

    const Hello = () => <h1>You should return component or next function</h1>;

    const Data = processFuncArray(Component, arrs, (C) => C);
    return Data ? <Data {...props} /> : <Hello />;
  };
}
