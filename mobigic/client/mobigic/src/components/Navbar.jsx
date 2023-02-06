import React, { useState, useEffect } from 'react';
import styles from "../Styles/Navbar.module.css"
import { Link, redirect, useNavigate } from "react-router-dom";

const Navbar = ({ login ,setLogin}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate()


const handleLogout =()=>{
  localStorage.removeItem("user")
 setLogin(false)
 navigate("/login")
}


  return (

    <div className={styles.navbarlist}>
      <div className={styles.navbaritem}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.navbaritem}>
        <Link to="/upload">Upload</Link>
      </div>
      {login ? "" : <div className={styles.navbaritem}>
        <Link to="/register">Register</Link>
      </div>}

      {login ? (<>
        <div className={styles.navbaritem}>
          <Link to="/profile">Welcome  {login}</Link>
        </div>
        <div className={styles.navbaritem}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </>


      ) : (
        <div className={styles.navbaritem}>
          <Link to="/login">Login</Link>
        </div>

      )}
    </div>

  );
};

export default Navbar;
