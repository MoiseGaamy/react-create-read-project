import React from "react"
import './App.css';
import UserList from "./components/UserList";
import UsersForm from "./components/UsersForm";

function App() {
 
  return (
    <div className="main">
      <h1 className="text-center mb-3"> displaying userList in React</h1>
      <UsersForm/>
      <UserList/>
    </div>
  );
}

export default App;
