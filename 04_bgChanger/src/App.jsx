import React, { useState } from 'react'

function App() {
  const[color, setColor]= useState("black")
  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")}
          className='px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}}>
            Red
          </button>
           <button onClick={()=> setColor("lime")}
          className='px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"lime"}}>
            Lime
          </button>
           <button onClick={()=> setColor("blue")}
          className='px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>
            Blue
          </button>
           <button onClick={()=> setColor("magenta")}
          className='px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"magenta"}}>
            Magenta
          </button>
           <button onClick={()=> setColor("cyan")}
          className='px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"cyan"}}>
            Cyan
          </button>
        </div>
      </div>
    </div>
  )
}

export default App