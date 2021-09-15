import React from "react"


function User(props) {
    const UnikUser = props.user
    
    function handleClick(e) {
        e.preventDefault()
        props.onDelete(UnikUser.id)
        
    }
    return (
        <tr>
        <td>{UnikUser.name}</td>
        <td>{UnikUser.gen}</td>
            <td>{UnikUser.email}</td>
            <button type="button" class="btn btn-danger" onClick={handleClick}>Delete</button>
    </tr>
    )
}

export default User;