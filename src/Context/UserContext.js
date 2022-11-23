import React, { createContext, useState } from 'react';
import app from '../firebase/Firebase.config';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {createUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;