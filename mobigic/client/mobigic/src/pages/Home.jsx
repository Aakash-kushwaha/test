import React, { useState } from 'react';
import axios from "axios"


const Home = ({login,setLogin}) => {
    const [imgdata,setImgData] = React.useState([])

    React.useEffect(()=>{
      let token = JSON.parse(localStorage.getItem("user"))
      console.log(token,"token")
     token  &&   axios({
            method: 'get',
            url: `http://localhost:5000/user/userdata`,
            headers:{
              Authorization:token.token ,
            },
          })
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    },[login])
  console.log(imgdata)

  return (
    <>
    <div>
        Home page
    </div>
    </>
  );
};

export default Home;
