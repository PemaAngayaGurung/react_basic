import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [uname, setUname] = useState("");
  const [uemail, setUemail] = useState("");

  const { setUsername, setEmail } = useContext(ThemeContext);

  const navigate = useNavigate();

  const submitdata = async (e) => {
    e.preventDefault();
     setEmail(uemail);
    setUsername(uname);
    navigate("/"); 
  };
  return (
    <div className="login-div h-screen">
      <form className="my-30">
        <h1 className="text-center text-3xl  bg-blue-100 py-2 mx-2 rounded-lg">
          Log In
        </h1>
        <div className="input-div flex  justify-center my-10 gap-6">
          <div>
            <label htmlFor="username" className="mx-2">
              Username:
            </label>
            <input
              className="border rounded"
              type="text"
              id="username"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="mx-2">
              Email:
            </label>
            <input
              className="border rounded"
              type="text"
              id="email"
              onChange={(e) => setUemail(e.target.value)}
            />
          </div>
          <div>
            <button
              className="border-none bg-blue-500 py-1 px-2 rounded text-white cursor-pointer"
              onClick={submitdata}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
