import { useState, useEffect } from "react";
import initAuth from "../Firebase/firebase.init";
import { getAuth, signOut, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, updateProfile, signInWithPopup } from "firebase/auth";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState();
    const [admin, setAdmin] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        // email password register
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError('')
                const newUser = { email, displayName: name };

                setUser(newUser);

                // save user to db
                saveUserToDb(email, name, 'POST')
                //send name to firebaes 

                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/')
            })
            .catch((error) => {

                setAuthError(error.message)

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
                const user = result.user;
                const destination = location?.state?.from || '/'
                history.replace(destination)
                saveUserToDb(user.email, user.displayName, 'PUT')
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

    useEffect(() => {
        fetch(`https://x-drone.herokuapp.com/users/${user.email}`)
        .then( res => res.json())
        .then (data => setAdmin(data.admin))
    }, [user.email])

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

    const saveUserToDb = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://x-drone.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        googleSignIn,
        logout,
    }
}


export default useFirebase;