import { useState, useCallback, useEffect, useRef } from "react"

function App() {
const [length, setLength] = useState(8)
const [numberAllowed, setNumberAllowed] = useState(false)
const [charaterAllowed, setCharaterAllowed] = useState(false)
const [password, setPassword] = useState("")

// useRef hook
const passwordRef = useRef(null)

const passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed) str += "1234567890s"
  if(charaterAllowed) str += "@#$%^&*()_+"

  for(let i = 1; i <=length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)
}, [length,numberAllowed, charaterAllowed, setPassword ])

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)}, [password])

useEffect(() => {passwordGenerator()}, [length, numberAllowed, charaterAllowed, passwordGenerator])
  return (
 <>
  <h1 className="text-white text-lg text-center mt-4">Password Generator</h1>
 <div className="w-full max-w-md mx-auto text-center shadow-md rounded-lg px-4 my-8 p-3 text-orange-500 bg-gray-700">
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text" value={password} className="outline-none w-full py-1 bg-white px-3" placeholder="Password" readOnly ref={passwordRef} />
    <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={copyPasswordToClipboard}>Copy</button>
  </div>
  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input type="range" min={6} max={100} className="cursor-pointer" onChange={(e) => {setLength(e.target.value)}}/>
      <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {setNumberAllowed((prev) => !prev)}} />
      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" defaultChecked={charaterAllowed} id="charaterInput" onChange={() => {setCharaterAllowed((prev) => !prev)}} />
      <label htmlFor="charaterInput">Characters</label>
    </div>
  </div>
 </div>
 </>
  )
}

export default App
