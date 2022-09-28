import './login.css';
import google_icon from './../../assets/icons/google_icon.png';

const Login = () => {
  return (
    <div className='div div2 div_bg login'>
      <div className='register_heading_container'>
        <h3 className='head_style1'>Hello Again</h3>
        <p className='para_style1'>Time to add and track your expenses again.</p>
      </div>
      <form className='sign_form' id="register_form">
        <input className="input_style1" type="email" placeholder="Email" />
        <input className="input_style1" type="password" placeholder="Password" />
        <button type="submit" className='primary_btn btn btn_lg'>Sign In</button>
      </form>
      <div className="google_auth_container">
        <div className="google_auth_header">
          <div className="line"></div>
          <h4>or Sign In with Google</h4>
          <div className="line"></div>
        </div>
        <div className="google_auth_btn_container"><button className="google_auth_btn btn btn_md"><img src={google_icon}/></button></div>
      </div>
      <div class="redirect_to_register"><p>Not a member?<a>Register Now.</a></p></div>
    </div>

  )
}



export default Login;
