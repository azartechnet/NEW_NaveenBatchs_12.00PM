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
/*const Sample=()=>{
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
r1.render(<Sample/>)*/

//React without jsx
/*const Sample=()=>{
  return React.createElement(
    "div",
    null,
    React.createElement("h1",null,"Hello, This is React without JSX"),
    React.createElement("p",null,"This is a paragraph created without JSX syntax.")
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(React.createElement(Sample))*/

//React with JSX

/*const Login=()=>{
  return(
    <>
      <h1>Login Component</h1>
      <form>
        <input type="text" placeholder="Username"/><br/><br/>
        <input type="password" placeholder="Password"/><br/><br/>
        <button type="submit">Login</button>
      </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Login/>)*/

//React List

/*const MyElem=()=>{
  return(
    <div>
      <h1>My Favourite Foods</h1>
      <ul>
        <li>Biryani</li>
        <li>Pasta</li>
        <li>Pizza</li>
        <li>Sushi</li>
      </ul>
      <ol>
        <li>Biryani</li>
        <li>Pasta</li>
        <li>Pizza</li>
        <li>Sushi</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyElem/>)*/

//React Conditional Rendering

/*const x=prompt("Enter your age:");
let text="";
if(x<18){
  text="You are a minor.";
}else{
  text="You are an adult.";
}
const AgeCheck=()=>{
  return(
    <div>
      <h1>Age Check</h1>
      <p>{text}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<AgeCheck/>)*/

//React Function Components

/*function Sample()
{
  return(
    <div>
      <h1>This is a Sample Function Component</h1>
      <p>Function components are a simpler way to write components that only contain a render method and don't have their own state.</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

//React function components
 /*function Greeting()
  {
    const name="Azarudeen";
    return(
      <div>
        <h1>Welcome to React Function Components!{name}</h1>
        <p>This is a simple greeting component.</p>
      </div>
    )
  }
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Greeting/>)*/

//React Class Components
/*class Welcome extends React.Component{
  render(){
    return(
      <div>
        <h1>Welcome to React Class Components!</h1>
        <p>This is a simple welcome component.</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Welcome/>)*/

//React Class Components
/*class Profile extends React.Component{
  render(){
    const name="Azarudeen";
    const profession="Web Developer";
    return(
      <div>
        <h1>Profile Component</h1>
        <p>Name: {name}</p>
        <p>Profession: {profession}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Profile/>)*/

//Function into function
/*function OuterFunction(){
  function InnerFunction(){
    return <h2>This is the Inner Function Component</h2>;
  }
  return(
    <div>
      <h1>This is the Outer Function Component</h1>
      <InnerFunction/>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<OuterFunction/>)*/

//Class into class
class OuterClass extends React.Component{
  InnerClass(){
    return <h2>This is the Inner Class Component</h2>;
  }
  render(){
    return(
      <div>
        <h1>This is the Outer Class Component</h1>
        {this.InnerClass()}
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<OuterClass/>)
