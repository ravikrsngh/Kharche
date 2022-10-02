import {createContext, useState, useEffect } from 'react';
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth,db} from './../firebaseconfig';
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";

const AuthContext = createContext() //creating the context
export default AuthContext;



// Creating the Provider here itself.
export const AuthProvider = ({children}) => {

  let [user, setUser] = useState(() => localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : null);
  let navigate = useNavigate();

  const SignUpUserWithEmailPassword = async (email,password,name) => {
    await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser,{
      displayName: name,
    })
    setUser(auth.currentUser)
    localStorage.setItem('user',JSON.stringify(auth.currentUser))
    navigate(`/dashboard`);
  }

  const SignInUserWithEmailPassword = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const signeduser = userCredential.user;
      setUser(signeduser)
      localStorage.setItem('user',JSON.stringify(auth.currentUser))
      navigate(`/dashboard`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const signeduser = result.user;
        setUser(signeduser)
        localStorage.setItem('user',JSON.stringify(auth.currentUser))
        navigate(`/dashboard`);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const SignOutUser = () => {
    signOut(auth).then(() => {
      setUser(null)
      localStorage.removeItem("user")
    }).catch((error) => {
      // An error happened.
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)

      } else {

      }
    },[]);
  });

  let contextData = {
    user:user,
    SignUpUserWithEmailPassword:SignUpUserWithEmailPassword,
    SignInUserWithEmailPassword:SignInUserWithEmailPassword,
    SignInWithGoogle:SignInWithGoogle,
    SignOutUser:SignOutUser
  }

  return(
          <AuthContext.Provider value={contextData} >
              {children}
          </AuthContext.Provider>
      )
}
