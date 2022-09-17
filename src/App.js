import React from "react";
import { useState } from "react";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Routes } from "./components/Routes";

const App = () => {
  const [darkTheme, setdarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : " "}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen ">
        <Navbar setdarkTheme={setdarkTheme} darkTheme={darkTheme}  />
        <Routes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
