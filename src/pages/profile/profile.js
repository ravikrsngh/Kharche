import './profile.css';
import {Link} from 'react-router-dom';
import {useState, useContext, useEffect} from 'react';
import AuthContext from './../../context/AuthContext';
import Navbar from './../../components/navbar/navbar';

const Profile = () => {
  let {user,SignOutUser} = useContext(AuthContext)
  return (
    <div className="div div2 profile_page_container">
      <h4>Sorry {user.displayName} !!</h4>
      <span>We are still developing this section so that you can edit your profile info.</span>
      <br/>
      <button onClick={SignOutUser} className="logout_btn">Logout</button>

      <Navbar iconColors={['#B9B9B9','#B9B9B9','#B9B9B9','#41224A']}/>
    </div>
  )
}

export default Profile;
