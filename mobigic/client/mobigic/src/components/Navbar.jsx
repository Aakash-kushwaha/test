import React, { useState, useEffect } from 'react';
import styles from "../Styles/Navbar.module.css"
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({login}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
 


 

  return (

      <div className={styles.navbarlist}>
        <div className={styles.navbaritem}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.navbaritem}>
          <Link to="/upload">Upload</Link>
        </div>
        {login?"": <div className={styles.navbaritem}>
          <Link to="/register">Register</Link>
        </div>}
       
        {login ? (
          <div className={styles.navbaritem}>
            <Link to="/profile">Welcome  {login}</Link>
          </div>
        ) : (
          <div className={styles.navbaritem}>
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
   
  );
};

export default Navbar;
