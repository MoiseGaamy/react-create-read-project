const initialState = {
    users: []
}

const usersReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload] };
        case 'EDIT_USER':
            const updatedUsers = state.users.map((user) => {
                if (user.id === action.payload.userId) {
                    return action.payload.updatedUser
                }
                return user;
            });
            return { ...state, users: updatedUsers };
        case 'DELETE_USER':
            const deletedUser = state.users.filter((user) => {
                return user.id !== action.payload
            })
            return { ...state, users: deletedUser };
        case 'ALL_USERS':
            return { ...state, users: action.payload };
        default:
            return state
    }
};

export default usersReducers;