import React from 'react'
import { connect } from "react-redux";
import {createUserEmailAndPassword,loginWithGoogle} from '../actions/authAction.js';

const Register = (props) => {
    if (!props.auth.isLoaded) return null
    if(!props.auth.isEmpty) props.history.push('/')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        props.createUser(email, password);
    }
    
    return (
        <>
        <div className="mycontainer">
              <div className="forms-mycontainer">
                  <div className="signin-signup">
                      <form actions="#" className="sign-in-form" onSubmit={handleSubmit}>
                          <h2 className="title">Register</h2>
                          <div className="myinput-field">
                              <input type="text" name="email" placeholder="Email" />
                          </div>
                          <div className="myinput-field">
                              <input type="password" name="password" placeholder="password" />
                          </div>
                          <input type="submit" className="bbtn solid" value="Submit" />
                          <button onClick={props.google} className="btn btn-secondary google">Sign-In with Google</button>
                      </form>
                  </div>
              </div>
        </div>
        </>
       
    
    )
}
const mSTP = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = {
    createUser: createUserEmailAndPassword,
    google : loginWithGoogle
}
export default connect(mSTP, mapDispatchToProps)(Register)
