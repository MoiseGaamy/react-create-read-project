export const addUser = (newUser) => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection("users").add({
            ...newUser,
            timestamp: getFirestore().Timestamp.fromDate(new Date())
        })
            .then(() => {
                // dispatch({
                //     type: 'ADD_USER',
                //     payload: newUser
                // });
            });

    };
    // return {
    //     type: 'ADD_USER',
    //     payload: newUser,
    // };
};
export const editUser = (userId, updatedUser) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore().collection('users').doc(userId).update(updatedUser)
            .then(() => {
            
        })
    }
    // return {
    //     type: "EDIT_USER",
    //     payload: { userId, updatedUser }
    // };
};
export const deleteUser = (userId) => {
    return (dispatch, state, { getFirestore })=>{
        getFirestore().collection("users").doc(userId).delete().then(() => {});
    }
    // return {
    //     type: "DELETE_USER",
    //     payload: userId
    // };
};

export const getAllUsers = () => {
    return (dispatch, state, { getFirestore }) => {
        getFirestore().collection('users')
            .orderBy('name', 'asc')
            .onSnapshot((query) => {
                const Users = [];
                query.forEach((doc) => {
                    Users.push({ ...doc.data(), id:doc.id });
                });
                console.log(Users);
                dispatch({ type: "ALL_USERS", payload: Users });
          })
    }
}