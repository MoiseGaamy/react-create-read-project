import React from "react"
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import ProtectRoute from "./components/ProtectRoute.js";

function App() {

  return (
    <BrowserRouter>
      <ProtectRoute exact path="/" component={Home}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/register" component={Register}/>
   </BrowserRouter>
  );
}


export default App