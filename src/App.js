import React,{useState} from "react"
import './App.css';
import UserList from "./components/UserList";
import UsersForm from "./components/UsersForm";

function App() {

  const [users, setUsers] = useState([])
  
  function addUser(user) {
    setUsers([...users, user]);
  }
  
  function DeleteUser(userid) {
    setUsers((prev) => {
      return prev.filter((user) => {
       return userid !== user.id
      })
  
    })
  }
  
  function editUser(edited) {
    setUsers((prev) => {
      return prev.map((user) => user.id === edited.id ? edited : user
      )
    })
  }

  return (
    <div className="main">
      <h1 className="text-center mb-3"> displaying userList in React</h1>
      <UsersForm />
      <UserList  ondelete={DeleteUser} onEdit={editUser}/>
    </div>
  );
}

export default App;
