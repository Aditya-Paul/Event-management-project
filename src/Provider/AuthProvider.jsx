/* eslint-disable react/prop-types */
import { createContext, useEffect, useState,  } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Components/Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // google sign in
    const googlesignIN = () => {
        return signInWithPopup(auth, googleprovider)
    }

    // user register
    const createuser =(email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login
    const userlogin =(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user logout
    const userlogout = () =>{
        return signOut(auth)
    }

    // user state 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log('user',currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        googlesignIN,
        createuser,
        userlogin,
        user,
        userlogout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;