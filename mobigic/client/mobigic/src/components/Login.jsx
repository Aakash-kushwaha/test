import React, { useState } from 'react';
import axios, { Axios } from "axios"

import { useNavigate } from 'react-router-dom';

const Login = ({login,setLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // send the data to the server or perform other logic here

    axios.post('http://localhost:5000/user/login', {
      email,password
    })
    .then(function (response) {
      // console.log(response.data)
      localStorage.setItem("user",JSON.stringify(response.data) )
      setLogin(response.data.name)
      alert("user login Success")
      
      navigate("/")
    })
    .catch(function (error) {
      alert("user login failed")
      console.log(error);

    });
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
