
import { getAuth , GoogleAuthProvider , signInWithPopup , createUserWithEmailAndPassword  , signOut , onAuthStateChanged , GithubAuthProvider , updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../firebase/firebase.init";


firebaseInit();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const SigninGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => setUser(result.user))
        .catch(error => setError(error.massage))
    }

    const SigninGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => setUser(result.user))
            .catch(error => console.log(error.massage))
    }

    const SigninEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
            .catch(error => setError(error.massage));
    }

    const updateProfiles = (name) => {
        updateProfile(auth.currentUser, { displayName: name }).then((result) => {})
        .catch((error) => setError(error.massage));
    }

    useEffect(() =>
         onAuthStateChanged(auth, (user) => {
            if (user)
            {
                setUser(user)
            }
            else
            {
                setUser({})
            }
        })
   , [])
    
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
             setError(error)
          });
    }
    
    return {
        user,
        error,
        logOut,
        SigninGoogle,
        SigninGithub,
        SigninEmailAndPassword,
        updateProfiles
    }
}

export default useFirebase;