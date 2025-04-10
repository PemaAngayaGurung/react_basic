

import './App.css'
import Card from "./components/Card.jsx"

function App() {

  return (
    <>
    <h1 className='bg-green-500 text-black p-2 rounded'>Tail wind test </h1>
    <Card username = "Pema Angaya Gurung" position ="Junior developer" myArray = {{name:"pema", address: "mustang"}}/>
    <Card username = "Thaman Singh Thapa" position ="Junior coder" myArray = {{name:"thaman", address: "syanja"}}/>
    </>
  )
}

export default App
