import './navbar.css';
import plusicon from './../../assets/icons/Plus.png'
import {Link} from 'react-router-dom';
import {auth,db} from './../../firebaseconfig';
import {useState, useContext, useEffect} from 'react';
import AddExpense from './../addExpense/addExpense';

const Navbar = (props) => {

  const [addExpenseModalDisplay,setAddExpenseModalDisplay] = useState(false)

  return (
    <nav style={{'display': props.display }}>
      <Link to="/dashboard"><div className="navicon">
        <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0833 24.3333C19.7568 24.3333 25.1667 19.11 25.1667 12.6667C25.1667 6.22334 19.7568 1 13.0833 1C6.40989 1 1 6.22334 1 12.6667C1 19.11 6.40989 24.3333 13.0833 24.3333Z" stroke={props.iconColors[0]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18.2066 7.71997L15.645 15.14L7.95996 17.6133L10.5216 10.1933L18.2066 7.71997Z" stroke={props.iconColors[0]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div></Link>
      <Link to="/analytics"><div className="navicon">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.4121 17.205C22.6699 18.9602 21.5091 20.5069 20.031 21.7098C18.5529 22.9128 16.8027 23.7353 14.9333 24.1056C13.0639 24.4758 11.1323 24.3825 9.30731 23.8338C7.48232 23.285 5.81953 22.2976 4.46433 20.9578C3.10912 19.6179 2.10275 17.9665 1.53321 16.1479C0.963669 14.3293 0.848292 12.3989 1.19717 10.5254C1.54604 8.6519 2.34855 6.89239 3.53452 5.40069C4.7205 3.90899 6.25383 2.73053 8.00047 1.96832" stroke={props.iconColors[1]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24.3337 12.6667C24.3337 11.1346 24.0319 9.61749 23.4456 8.20203C22.8593 6.78656 21.9999 5.50044 20.9166 4.41709C19.8332 3.33374 18.5471 2.47438 17.1316 1.88807C15.7162 1.30177 14.1991 1 12.667 1V12.6667H24.3337Z" stroke={props.iconColors[1]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div></Link>
      <div className="addicon" onClick={()=>setAddExpenseModalDisplay(true)}>
        <img src={plusicon} />
      </div>
      <div className="navicon">
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.125 8C19.125 6.14348 18.3612 4.36301 17.0015 3.05025C15.6419 1.7375 13.7978 1 11.875 1C9.95218 1 8.10812 1.7375 6.74848 3.05025C5.38884 4.36301 4.625 6.14348 4.625 8C4.625 16.1667 1 18.5 1 18.5H22.75C22.75 18.5 19.125 16.1667 19.125 8Z" stroke={props.iconColors[2]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.9655 23.1667C13.7531 23.5203 13.4481 23.8138 13.0813 24.0178C12.7144 24.2218 12.2985 24.3292 11.8751 24.3292C11.4517 24.3292 11.0358 24.2218 10.6689 24.0178C10.302 23.8138 9.99711 23.5203 9.78467 23.1667" stroke={props.iconColors[2]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <Link to="/profile"><div className="navicon">
        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.3333 22V19.6667C20.3333 18.429 19.8241 17.242 18.9177 16.3668C18.0113 15.4917 16.7819 15 15.5 15H5.83333C4.55145 15 3.32208 15.4917 2.41565 16.3668C1.50922 17.242 1 18.429 1 19.6667V22" stroke={props.iconColors[3]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.6666 10.3333C13.336 10.3333 15.4999 8.244 15.4999 5.66667C15.4999 3.08934 13.336 1 10.6666 1C7.99721 1 5.83325 3.08934 5.83325 5.66667C5.83325 8.244 7.99721 10.3333 10.6666 10.3333Z" stroke={props.iconColors[3]} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div></Link>
      {addExpenseModalDisplay? <AddExpense setAddExpenseModalDisplay={setAddExpenseModalDisplay}  /> : null}
    </nav>
  );
}



export default Navbar;
