import React,{useState} from "react"
import './App.css';
import UserList from "./components/UserList";
import UsersForm from "./components/UsersForm";

function App() {

  const [users, setUsers] = useState([])
  
  function addUser(user) {
  return setUsers([...users,user])
}

  return (
    <div className="main">
      <h1 className="text-center mb-3"> displaying userList in React</h1>
      <UsersForm addUser={addUser} />
      <UserList data={users}/>
    </div>
  );
}

export default App;
