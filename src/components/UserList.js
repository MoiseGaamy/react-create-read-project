import React from "react";
import User from "./User";
import { connect } from 'react-redux';


function UserList(props) {
    return (
        <div className="list">
          <div>
                           <table className="table table-dark table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">male</th>
                                    <th scope="col">Email</th>
                                    </tr>
                                </thead>
                    <tbody>
                        {props.users.map((user) => {
                            return <User id={user.id} key={user.id} user={user} onDelete={props.ondelete} onEdit={props.onEdit}/>
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
const mapStateToProps = (state)=> {
    return {
        users: state.users,
    };
}

export default connect(mapStateToProps) (UserList);