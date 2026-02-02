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
/*class OuterClass extends React.Component{
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
r1.render(<OuterClass/>)*/

//Function Component with props

/*function Sample(props)
{
  return(
    <div>
      <h1>Hello{props.name}{props.age}</h1>
      <p>This is paragraph</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="39"/>)*/

//Component in Component

/*function Component1()
{
  return(
    <div>
      <h1>Hello</h1>
      <p>Component1</p>
      <Component2/>
    </div>
  )
}
function Component2()
{
  return(
    <h1>Component2</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//Constructor using super
//The constructor in React is a special method used in class components
// for initializing local state and binding event handlers
/*class Sample extends React.Component
{
   constructor()
   {
    super();
    this.state={name:"azar",age:18}
   }
   render()
   {
    return(
      <div>
        <h1>Hello{this.state.name}</h1>
        <p>Your age is::{this.state.age}</p>
      </div>
    )
   }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor without super

/*class Sample extends React.Component
{
  constructor()
  {
    //super()
    this.state={name:"azar",age:30}
  }
  render()
  {
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is::{this.state.age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//constructor with props

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={name:props.name,age:props.age}
  }
  render()
  {
    return(
      <div>
        <h1>Hello,{this.state.name}</h1>
        <p>Your age is::{this.state.age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="30"/>)*/

/*class Couter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0};
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }
  render()
  {
    return(
      <div style={{textAlign:'center'}}>
        <h1>Counter:{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Couter/>)*/

//React Events

/*function Football()
{
  const shoot=()=>{
    alert('Great Shot!!')
  }
  return(
     <div style={{textAlign:'center'}}>
        <button onClick={shoot}>TakeShoot</button>
     </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Event with Arg

/*unction Football()
{
  const shoot=(a)=>{
    alert(a)
  }
  return(
    <div style={{textAlign:'center'}}>
      <button onClick={()=>shoot('Greating')}>Take the shot!!!</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//Event in Form

/*function MyForm()
{
  const handleSubmit=(event)=>{
    event.preventDefault();
    alert("FormSubmitted...")
  }
  return(
    <div style={{textAlign:'center'}}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the name"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyForm/>)*/

//Destructring

/*function Welcome({name,age})
{
  return(
    <div>
      <h1>Hello,{name}</h1>
      <p>Your age is::{age}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome name="azar" age="35"/>)*/

//Destructuring in class component

/*class Welcome extends React.Component
{
  constructor()
  {
    super();
    this.state={name:"azar",age:30}
  }
  render()
  {
    const {name,age}=this.state;
    return(
      <div>
        <h1>Hello,{name}</h1>
        <p>Your age is::{age}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Welcome/>)*/

//Destructuring in arrays

/*function Skills()
{
  const skills=["Html","css","js"]
  const [s1,s2,s3]=skills;
  return(
    <div>
      <h1>MySkills</h1>
      <ul>
        <li>{s1}</li>
        <li>{s2}</li>
        <li>{s3}</li>
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//class component(Mounting)

/*class MyComponent extends React.Component
{
  constructor(props)
  {
    super(props)
    console.log("Constructor called")
  }
  componentDidMount()
  {
    console.log("ComponentDidMounted...")
  }
  render()
  {
    console.log("Render called")
    return(
      <h1>Hello React Mounting..</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyComponent/>)*/

//class component updating

class Counter extends React.Component
{
  constructor()
  {
    super();
    this.state={count:0}
  }
  componentDidUpdate(prevProps,prevState)
  {
    console.log("ComponentUpdated")
    console.log("PreviousCount::",prevState.count)
    console.log("CurrentCount::",this.state.count)
  }
  render()
  {
    return(
      <>
        <h2>Count{this.state.count}</h2>
        <button onClick={()=>{
          this.setState({count:this.state.count+1})
        }}>
          increment
        </button>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)