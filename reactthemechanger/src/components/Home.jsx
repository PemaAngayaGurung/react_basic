import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const Home = () => {
  const {
    theme,
    username = "Pema Angaya Gurung",
    email,
  } = useContext(ThemeContext);

  const changeTheme = () => {
    toggleTheme();
  };

  return (
    <div className={`h-194  bg-${theme}`}>
      <div className="body-div flex text-blue-400 justify-center my-3 mx-2 py-3">
        <h1>
          Welcome <span className="text-lg text-red-400">{username}</span> to
          the home page
        </h1>
      </div>
    </div>
  );
};

export default Home;
