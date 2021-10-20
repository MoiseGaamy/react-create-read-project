export const addUser = (newUser) => {
    return {
        type: 'ADD_USER',
        payload: newUser,
    };
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