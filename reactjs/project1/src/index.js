import React from "react";
import ReactDOM from "react-dom/client";
//Basic Rendering of a React Component
/*const App=()=>{
  return(
    <h1>Hello, World!</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<App/>)*/
//Dynamic Rendering 
const Sample=()=>{
  const name="azar";
  const age=30;
  return(
    <div>
      <h1>Hello, My name is {name}.</h1>
      <h2>I am {age} years old.</h2>
      <p>Today Date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)
