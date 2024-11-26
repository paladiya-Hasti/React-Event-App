import React, { useState } from "react";

import Navbar from "./compoment/Navbar";

import "./App.css";
import Router from "./compoment/Allroutes/Router";

const App = () => {
  
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
};

export default App;
