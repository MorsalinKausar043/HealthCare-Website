
import { getAuth , GoogleAuthProvider , signInWithPopup , createUserWithEmailAndPassword  , signOut , onAuthStateChanged , GithubAuthProvider , updateProfile   } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../firebase/firebase.init";


firebaseInit();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const SigninGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const SigninGithub = () => {
       return signInWithPopup(auth, githubProvider)
    }

    const deploy_displayName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {});
    };
    const SigninEmailAndPassword = (email, password , name) => {
        return createUserWithEmailAndPassword(auth, email, password , name);
        
            // .then(result => {
            //     // setUser(result.user)
            //     /
            //     //     .then((result) => {
            //     //         setUser(result.user);
            //     //     })
            // })
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
        , [auth]);
    
    const logOut = () => {
        return signOut(auth)
    }
    
    return {
        user,
        logOut,
        SigninGoogle,
        SigninGithub,
        SigninEmailAndPassword,
        auth,
        deploy_displayName,
        setUser
    }
}

export default useFirebase;