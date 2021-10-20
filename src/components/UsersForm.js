import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";


function UsersForm(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gen, setGen] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        //verifiny user entry
        if (name && email ) {
            
            var user = {
                name: name,
                email: email,
                gen: gen,
                id: uuid()
            };
        }
        console.log(user);
        props.addNewUser(user)

        setName("");
        setEmail("");
        setGen("");
    }
    return (
        <form onSubmit={handleSubmit} className="row g-3">
            
            <div className="col-auto">
               <input type="text" className="form-control" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your Name" />
            </div>
            <div className="col-auto">
              <input type="email" className="form-control"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" />
            </div>
            <div className="col-auto">
            <input type="text" className="form-control" name="gen" value={gen} onChange={(e)=>setGen(e.target.value)} placeholder="Enter your Gender" />
            </div>
            <button className="btn btn-success" type="submit">Submit</button> 
        </form>
    )
}
const mapDispatchToProps = {
    addNewUser: addUser,
  };

export default connect(null,mapDispatchToProps)(UsersForm);