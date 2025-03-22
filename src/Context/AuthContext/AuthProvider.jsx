import auth from "../../firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }
    

    useEffect(() => {
     const unSubscribe  =  onAuthStateChanged(auth, currentUser  =>{
            if(currentUser){
             setUser(currentUser)
             setLoading(false);
            }
            else{
             setUser(null)
            }
         })
         return () =>{
            unSubscribe();
         }
    },[])
    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;