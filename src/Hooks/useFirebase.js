import { useState, useEffect } from "react";
import initAuth from "../Firebase/firebase.init";
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        // email password register
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
               
                setAuthError('')
                const newUser = {email, displayName: name};
              
                setUser(newUser);
                  //send name to firebaes after creation
               
                  updateProfile(auth.currentUser, {
                    displayName: {name}
                  }).then(() => {
                    
                  }).catch((error) => {
                  
                  });
               
                  history.replace('/')
            })
            .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message)
                // ..
            })
            .finally(() => setIsLoading(false));
    }
    //login user

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
               
                setAuthError('')
            })
            .catch((error) => {
              
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
        ;

    }


    const googleSignIn = (location, history) => {
       
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
            
                setAuthError('')
            }).catch((error) => {
             
                setAuthError(error.message);
           
            })
            .finally(() => setIsLoading(false));;

    }

    //observe user state change 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                

            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;

    }, [])

    // log out 

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        googleSignIn,
        logout,


    }
}


export default useFirebase;