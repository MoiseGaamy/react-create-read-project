import React from "react";


function UserList(props) {
    const users = props.data
    return (
        <div className="list">
          <div>
                           <table class="table table-dark table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">male</th>
                                    <th scope="col">Email</th>
                                    </tr>
                                </thead>
                    <tbody>
                        {users.map((user) => {
                            return <tr>
                            <td>{user.name}</td>
                            <td>{user.gen}</td>
                            <td>{user.email}</td>
                        </tr>
                        })}
                                    
                                </tbody>
                            </table>
                        {/* <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <h5>{user.gen}</h5> */}
                    </div>
        </div>
    )
}

export default UserList;