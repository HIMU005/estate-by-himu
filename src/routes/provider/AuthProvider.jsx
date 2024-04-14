import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const [fakeData, setFakeData] = useState([]);
    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => setFakeData(data))
    }, [])

    console.log(user);

    // Login Provider 
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // useEffect(() => {
    //     const unSubscribe = onAuthStateChanged(auth, currentUser => {
    //         console.log("user in the auth state change", currentUser);
    //         setUser(currentUser);
    //         setLoading(false);
    //     });
    //     return () => {
    //         unSubscribe();
    //     }
    // }, [])


    const authInfo = {
        user,
        loading,
        fakeData,
        createUser,
        loginUser,
        setUser,
        setLoading,
        googleLogIn,
        gitHubLogIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;