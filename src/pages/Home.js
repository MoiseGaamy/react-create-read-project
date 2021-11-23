import React,{ useEffect}from 'react'
import UserList from "../components/UserList";
import UsersForm from "../components/UsersForm";
import { connect } from "react-redux";
import { getAllUsers } from "../actions/userActions.jsx";

const Home = (props) => {
    useEffect(() => {
        props.getAllUsers();
     },[props])
    
    return (
        <div className="main">
            <h1 className="text-center mb-3"> displaying userList in React</h1>
            <UsersForm/>
            <UserList/>
        </div>
    )
}
const mapDispatchToProps = {
    getAllUsers ,
  }

export default connect(null, mapDispatchToProps)(Home);
