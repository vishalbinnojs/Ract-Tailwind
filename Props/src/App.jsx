
import './App.css'
import Object from "./assets/components/Object";
import Array from "./assets/components/Array";
import Button from "./assets/components/Button";
import Card from "./assets/components/Card";
import Parent from "./assets/components/Parent";
import Default from './assets/components/Default';

function App() {
  
const obj = {
  name:"vishal",
  age:29
}

function firstClickFunction(){
  alert("1st Button is clicked")
}

function secondClickFunction(){
  alert("2nd Button is clicked")
}
  return (
    <>
<h1 style={{color:"red",textAlign:"center"}}>Passing Object as props</h1>
{/* <Object data={obj} role={"React Developer"}/> */}
<Object {...obj}/>
<hr />

<h1 style={{color:"red",textAlign:"center"}}>Passing array as props</h1>
<Array items={["banana","apple","cherry"]} />
<hr />

<h1 style={{color:"red",textAlign:"center"}}>Passing functions as props</h1>
<Button func={firstClickFunction}>1st click me</Button>

<Button func={secondClickFunction}>
  2nd click me
</Button>
<hr />

<h1 style={{color:"red",textAlign:"center"}}>Props as Jsx</h1>
<Card content={<>
  <h2>This is h2</h2>
  <p>This paragraph</p>
  </>}/>
<hr />

<h1 style={{color:"red",textAlign:"center"}}>Props as Children</h1>
<Parent title="Hello">
  <h3>This is heading h3.</h3>
  <p>I am sibling paragraph of h1</p>
</Parent>
<hr />

<h1 style={{color:"red",textAlign:"center"}}>Props as Children</h1>
  <Default name={"vishal"} age={29}/> 
    </>
  )
}

export default App
