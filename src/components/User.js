import React, { useState } from "react";
import { editUser } from "../actions/userActions.jsx";
import { connect } from "react-redux"
import { deleteUser } from "../actions/userActions.jsx";



function User(props) {
    const [fullInfo, setFullInfo] = useState({
        name: props.user.name,
        email: props.user.email,
        gen: props.user.gen,
        id: props.user.id
    })
    const [showEdit, setShowEdit] = useState(false);
    const UnikUser = props.user;
    
    function handleClick(e) {
        e.preventDefault()
        props.deleteUser(UnikUser.id)
        
    } 
    function handleChange(e) {
        const { name, value } = e.target;
        setFullInfo((prev) => {
            return {
                ...prev,
                [name] : value
            }
        })
    }
    function handleEdit(e) {
        e.preventDefault();
        props.editUser(props.user.id,fullInfo)  
        setShowEdit(!showEdit)
    }
    return (
        <>
   {showEdit ?
                
    (<tr> 
        <td>   
              <input type="text" className="form-control" name="name" value={fullInfo.name} onChange={handleChange} placeholder="Enter your Name" />
        </td>
        <td>
            <input type="email" className="form-control"  name="email" value={fullInfo.email} onChange={handleChange} placeholder="Enter your Email" />
        </td>
        <td>
            <input type="text" className="form-control" name="gen" value={fullInfo.gen} onChange={handleChange} placeholder="Enter your Gender" />
        </td>  
        <input type="submit" className="btn btn-secondary mt-2" value="Save" onClick={handleEdit}/>
    </tr>) : 
   ( <tr>
        <td>{UnikUser.name}</td>
        <td>{UnikUser.gen}</td>
        <td>{UnikUser.email}</td>
        <button type="button" className="btn btn-danger" onClick={handleClick}>Delete</button>
        <button type="button" className="btn btn-success" onClick={()=>{setShowEdit(!showEdit)}}>Edit</button>
     </tr>)
            }
    </>
    )
}
const mapDispatchToProps = {
    editUser,
    deleteUser,
}


export default connect(null,mapDispatchToProps)(User);