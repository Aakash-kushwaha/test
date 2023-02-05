import React, { useState } from 'react';
import styles from "../Styles/Register.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
   
    axios.post('http://localhost:5000/user/register', {
     name, email,password
    })
    .then(function (response) {
      console.log(response.data)
      alert("user registered Successfuly")
      navigate("/login")
    })
    .catch(function (error) {
      alert("user registeration failed")
      console.log(error);

    });
    

  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} >
      <div className={styles.formcontrol}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={styles.formcontrol}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={styles.formcontrol}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;
