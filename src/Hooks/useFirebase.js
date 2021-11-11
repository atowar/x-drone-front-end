import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn= () => {
      setIsLoading(true);
       return signInWithPopup (auth, googleProvider)
       .finally(()=>setIsLoading(false))
        
    }

    const logOut = () =>{
      setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser ({})
          })
          .finally(()=>setIsLoading(false))
    }
    
//observe user state
   useEffect(() => {
     const unsubscribe = onAuthStateChanged (auth, (user) => {
        if (user){
            setUser(user)
        } else{
          setUser({})

        }
        setIsLoading(false)

     });
     return unsubscribe;

   },[])

   return {
       user, 
       isLoading,
       setUser,
       googleSignIn,
       logOut
   }
    
}

export default useFirebase;