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


    // 👇🏼 here if we want to update the value lets say like this: counter + 4
    // this doesnt work cause of fibre as if these are all same the whole thing is taken in batch and only one of the is executed 

    // React batches these updates (thanks to Fiber), and since all updates are the same value (1), it effectively results in:
    // final state = 1
    // 👉 Not because it ignores them, but because they all resolve to the same value.

    // setCounter(count+1)
    // setCounter(count+1)
    // setCounter(count+1)
    // setCounter(count+1)

    // so if we do want to this kind of thing we do, here we have a callback fn in set method and 
    // prevCount is not captured once like count.
    // Instead:
    // React calls each function later
    // Each function receives the latest updated state
    
    setCounter(prevCount => prevCount + 1)
    setCounter(prevCount => prevCount + 1)
    setCounter(prevCount => prevCount + 1)
    setCounter(prevCount => prevCount + 1)

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
