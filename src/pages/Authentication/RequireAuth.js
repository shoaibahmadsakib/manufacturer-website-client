import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/Loading';
import auth from "../../firebase.init"


const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }
    
    if(!user){
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;