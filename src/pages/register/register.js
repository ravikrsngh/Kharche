import {useContext,useRef} from 'react';
import AuthContext from './../../context/AuthContext';
import './register.css';
import google_icon from './../../assets/icons/google_icon.png'

const Register = () => {

  let auth_ctx = useContext(AuthContext)
  let nameInput = useRef()
  let emailInput = useRef()
  let passwordInput = useRef()

  const onSubmitRegisterForm = (e) => {
    e.preventDefault()
    console.log("Submitting Form");
    auth_ctx.SignUpUserWithEmailPassword(emailInput.current.value,passwordInput.current.value,nameInput.current.value)
  }


  return (
    <div className='div div2 div_bg register'>
      <div className='register_heading_container'>
        <h3 className='head_style1'>Register</h3>
        <p className='para_style1'>Craete an account. It’s free.</p>
      </div>
      <form onSubmit={onSubmitRegisterForm} className='sign_form' id="register_form">
        <input className="input_style1" type="text" placeholder="Name" ref={nameInput} required />
        <input className="input_style1" type="email" placeholder="Email" ref={emailInput} required />
        <input className="input_style1" type="password" placeholder="Password" ref={passwordInput} required />
        <button type="submit" className='primary_btn btn btn_lg'>Register</button>
      </form>
      <div className="google_auth_container">
        <div className="google_auth_header">
          <div className="line"></div>
          <h4>or Sign In with Google</h4>
          <div className="line"></div>
        </div>
        <div className="google_auth_btn_container"><button onClick={auth_ctx.SignInWithGoogle} className="google_auth_btn btn btn_md"><img src={google_icon}/></button></div>
      </div>
    </div>
  )
}



export default Register;
