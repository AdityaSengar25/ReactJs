import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [count,setCounter] = useState(15)
  // let count=0

  const addValue=()=>{
    console.log("Value Added" ,count);
    // count=count+1;
    // setCounter(count) // can be set like this too
    setCounter(count+1)
  }
  const removeValue=()=>{
    if(count>0){
      setCounter(count-1)
    }
  }

  return (
    <>
    <h1>React Counter</h1>
    <h3>Count Value:{count}</h3>
    <button
    onClick={addValue}>Add Count</button>
    <button
    onClick={removeValue}>Remove Count</button>
    </>
  )
}

export default App
