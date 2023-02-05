import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Register from './components/Register';
import {
  Routes, Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './pages/Home';
import FileUpload from './pages/Upload';

function App() {
  const [login, setLogin] = React.useState("");
  // console.log(login,"login")

  React.useEffect(() => {
    let userName = JSON.parse(localStorage.getItem("user"))
    // console.log(userName,"username")
    userName && setLogin(userName.name)
  }, []);
  return (
    <div className="App">
      <Navbar login={login} ></Navbar>
      <Routes>
        <Route path='/' element={<Home login={login}></Home>}></Route>
        <Route path='/upload' element={<FileUpload></FileUpload>}></Route>
        <Route path="/register" element={<Register ></Register>} />
        <Route path="/login" element={<Login login={login} setLogin={setLogin}></Login>} />
      </Routes>
    </div>
  );
}

export default App;
