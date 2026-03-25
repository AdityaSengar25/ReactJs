import Rjs from "./Rjs"

function App() {
  const username = "Rjs"

  return (
    <>
    <Rjs />
    <h1>react {username}</h1> {/* here the username in braces is evaluated expression, where it is taken as a variable, evaluated becoz the conditions are already applied it its function and not here. */}
   </>
  )
}

export default App