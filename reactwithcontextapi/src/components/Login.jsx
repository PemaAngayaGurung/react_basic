import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  };
  return (
    <>
    <h2 className="text-center text-lg my-7">Log In</h2>
      <div className="flex justify-center ">
        <label htmlFor="username">Username:</label>
        <input className="border rounded mx-3 indent-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text" indent-2
          placeholder="Username"
        />
        <label htmlFor="password">Password:</label>
        <input className="border rounded mx-3 indent-2"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Password"
        />
        <button className="border px-4 rounded py-1 bg-blue-700 text-white" onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
};

export default Login;
