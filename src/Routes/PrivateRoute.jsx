import {  useContext } from "react";
// import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    
    if(loading){
       return <span className="loading loading-ring loading-xl"></span>
    }

    if(user){
       return children 
    }
    return <Navigate to="/signIn" state={location?.pathname} />
};

export default PrivateRoute;