import {useContext,useRef} from 'react';
import AuthContext from './../context/AuthContext';

function TestAuth(){

  let auth_ctx = useContext(AuthContext)
  let emailInput = useRef()
  let passwordInput = useRef()

  const onSubmitSignUpForm = (e) => {
    e.preventDefault()
    console.log("Submitting Form");
    auth_ctx.SignUpUserWithEmailPassword(emailInput.current.value,passwordInput.current.value)
  }

  const onSubmitSignInBtn = (e) => {
    e.preventDefault()
    console.log("Submitting Form");
    auth_ctx.SignInUserWithEmailPassword(emailInput.current.value,passwordInput.current.value)
  }

  console.log("TestAuth File");
  console.log(auth_ctx.user);

  return (
      <div>
        <p>User Logged In : {auth_ctx.user? (auth_ctx.user.email) : (<p>No User</p>)} </p>
        <h2>Sign Up</h2>
        <form onSubmit={onSubmitSignInBtn}>
          <input type="email" placeholder="Email" ref={emailInput} required/>
          <input type="password" placeholder="Password" ref={passwordInput} required/>
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={auth_ctx.SignInWithGoogle}>Sign In With Google</button>
        {auth_ctx.user && (<button onClick={auth_ctx.SignOutUser}>Logout</button>)}

      </div>
  )
}

export default TestAuth;
