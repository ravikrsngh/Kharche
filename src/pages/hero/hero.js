import { useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './hero.css';
import heroimg from './../../assets/img/heroimg.png';
import AuthContext from './../../context/AuthContext';

const Hero = () => {

  let navigate = useNavigate();
  let {user} = useContext(AuthContext)

  useEffect(()=>{
    if (user) {
      navigate(`/dashboard`);
    }
  },[])

  return (
    <div className='div hero'>
      <div className = 'hero_img_container'>
        <img src={heroimg} />
      </div>
      <div className='hero_heading_container'>
        <h3>Welcome To</h3>
        <h1>Kharche</h1>
      </div>
      <div className='hero_btn_container'>
        <Link to="/register"><button className='selected'>Register</button></Link>
        <Link to="/login"><button>Sign In</button></Link>
      </div>
    </div>
  )
}



export default Hero;
