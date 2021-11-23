export const createUserEmailAndPassword = (email,password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
            firebase
            .auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
            console.log(user);
            }).catch((err) => {
            console.log(err);
        })
    }
}
export const login = (email,password) => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>{
            console.log("successful loggin");
        }).catch((err) => {
            console.log(err);
        })
            
    }
}
export const loginWithGoogle = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase();
        const provider = new firebase.auth.GoogleAuthProvider();
            firebase
            .auth()
            .signInWithPopup(provider)
            .then(() => {
            console.log("registered with google");
            }).catch((err) => {
            console.log(err);
        })
    }
}
export const logOut = () => {
    return (dispatch, state, { getFirebase }) => {
        let firebase = getFirebase()
            firebase
            .auth()
            .signOut()
            .then(() => {
            console.log("logOut succesfully");
            }).catch((err) => {
            console.log(err);
        })
    }
}
