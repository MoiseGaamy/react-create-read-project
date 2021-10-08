const initialState = {
    users: [
        {
            name: "jean",
            email: "jean@gmail.com"
        },
        {
            name: "claude",
            email: "claude@gmail.com"
        }

    ]
}

const usersReducers = (state = initialState,action) => {
    return state
};

export default usersReducers;