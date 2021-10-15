import React,{useState} from "react"
import './App.css';
import UserList from "./components/UserList";
import UsersForm from "./components/UsersForm";
import { connect } from "react-redux";
import addUser from "./actions/userActions";

function App(props) {

  const [users, setUsers] = useState([])
  
  function addUser(user) {
    props.addNewUser(user)
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
      <UsersForm addUser={addUser}/>
      <UserList users={users} ondelete={DeleteUser} onEdit={editUser}/>
    </div>
  );
}
const mapDispatchToProps = {
  addNewUser: addUser,
};
export default connect(null,mapDispatchToProps)(App);
