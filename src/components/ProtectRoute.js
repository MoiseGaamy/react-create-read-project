import React from 'react'
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const ProtectRoute = ({component:Component,auth,...rest}) => {
    if(!auth.isLoaded) return null
    if (!auth.isEmpty) {
        return (
            <Route {...rest} render={(props) => {
                return <Component {...props}/>
            }} />
        )
    }

    return (
        <Route {...rest} render={(props) => {
            return <Redirect to={{ pathname:'/login'}}/>
        }}
        />
    )
   
}

const mstp = (state) => {
    return {
        auth : state.firebase.auth
    }
}
export default connect(mstp)(ProtectRoute)
