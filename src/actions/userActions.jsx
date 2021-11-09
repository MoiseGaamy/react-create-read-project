export const addUser = (newUser) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection("users").add(newUser)
            .then(() => {
                dispatch({
                    type: 'ADD_USER',
                    payload: newUser
                });
            });

    };
    // return {
    //     type: 'ADD_USER',
    //     payload: newUser,
    // };
};
export const editUser = (userId, updatedUser) => {
    return {
        type: "EDIT_USER",
        payload: { userId, updatedUser }
    };
};
export const deleteUser = (userId) => {
    return {
        type: "DELETE_USER",
        payload: userId
    };
};

export const getAllUsers = () => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('users')
            .onSnapshot((query) => {
                const Users = [];
                query.forEach((doc) => {
                    Users.push(doc.data());
                });
                console.log(Users);
                dispatch({ type: "ALL_USERS", payload: Users });
          })
    }
}