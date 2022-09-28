import {createContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './../firebaseconfig';

const AuthContext = createContext() //creating the context
export default AuthContext;



// Creating the Provider here itself.
export const AuthProvider = ({children}) => {

  let [user, setUser] = useState(null);
  const auth = getAuth(app);

  const  SignUpUserWithEmailPassword = (email,password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const signeduser = userCredential.user;
      // ...
      console.log(signeduser);
      setUser(signeduser)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });
  }

  const SignInUserWithEmailPassword = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential);
      const signeduser = userCredential.user;
      // ...
      console.log(signeduser);
      setUser(signeduser)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const signeduser = result.user;
        console.log(signeduser);
        setUser(signeduser)
        // ...
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
    }).catch((error) => {
      // An error happened.
    })
  }

  useEffect(() => {
    console.log("From UseEffect ");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user)
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("No User has logged in.");
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
