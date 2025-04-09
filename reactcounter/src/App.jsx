import { useState } from 'react'
import './App.css'

function App() {
const [value, setValue] = useState(3)
 const addValue = () => {
  setValue(value + 1)
 }

 const decreaseValue = () => {
  if(value <= 0) {
    return (console.log("Value cannot be less than zero"))
  }
  setValue(value -1 )

 }

  return (
    <>
      <h1>Hello Pema, keep learning...</h1>
      <h2>Conter value: {value}</h2>
      <button onClick={ addValue}>Increase value {value}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease value {value}</button>
    </>
  )
}

export default App
