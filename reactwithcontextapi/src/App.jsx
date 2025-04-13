import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {

  return (
   <UserContextProvider>
   <h1 className="bg-gray-500 text-center rounded-lg m-4 p-4">React with Context API</h1>
   <Profile/>
   <Login/>
   </UserContextProvider>
  )
}

export default App
