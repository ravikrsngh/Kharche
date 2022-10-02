import { Link } from "react-router-dom";
import './login.css';
import google_icon from './../../assets/icons/google_icon.png';
import { useEffect, useContext, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import AuthContext from './../../context/AuthContext';

const Login = () => {

  let navigate = useNavigate();
  let {user,SignInUserWithEmailPassword,SignInWithGoogle} = useContext(AuthContext)

  let emailRef = useRef()
  let passRef = useRef()

  const SubmitLoginForm = (e) => {
    e.preventDefault()
    SignInUserWithEmailPassword(emailRef.current.value,passRef.current.value)
  }

  useEffect(()=>{
    if (user) {
      navigate(`/dashboard`);
    }
  },[])

  return (
    <div className='div div2 div_bg login'>
      <div className='register_heading_container'>
        <h3 className='head_style1'>Hello Again</h3>
        <p className='para_style1'>Time to add and track your expenses again.</p>
      </div>
      <form className='sign_form' id="register_form" onSubmit={SubmitLoginForm}>
        <input className="input_style1" ref={emailRef} type="email" placeholder="Email" required/>
        <input className="input_style1" ref={passRef} type="password" placeholder="Password" required/>
        <button type="submit" className='primary_btn btn btn_lg'>Sign In</button>
      </form>
      <div className="google_auth_container">
        <div className="google_auth_header">
          <div className="line"></div>
          <h4>or Sign In with Google</h4>
          <div className="line"></div>
        </div>
        <div className="google_auth_btn_container"><button className="google_auth_btn btn btn_md" onClick={SignInWithGoogle}><img src={google_icon}/></button></div>
      </div>
      <div class="redirect_to_register"><p>Not a member?<Link to="/register"><a>Register Now.</a></Link></p></div>
    </div>

  )
}



export default Login;
