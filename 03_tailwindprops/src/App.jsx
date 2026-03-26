import React from 'react'
import Card from './assets/components/card'

const App = () => {

   let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
    <h3
    className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind</h3>
    <Card username="Aditya" btnText="Visit Profile" myobject={myObj}/> {/* here's how we pass something to the component. we cant directly pass and obj or array but can pass a string.*/}
    <Card username="Alex" myArray={newArr}/>
    </>
  )
}

export default App