import React, { useState } from 'react';
import axios from "axios"
import styles from "../Styles/Home.module.css"


const Home = ({login,setLogin}) => {
    const [imgdata,setImgData] = React.useState([])

    const DownloadFile =(url)=>{

      const aTag = document.createElement("a")
      aTag.href = url
      const fileName = url.split("/")
      console.log(fileName,"filename")
      aTag.setAttribute("download",fileName[fileName.length-1])
      // document.body.appendChild(aTag)
      aTag.click()
      aTag.remove()
    }
 

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
      .then((res)=>setImgData(res.data.userData))
      .catch((err)=>console.log(err))
    },[login])
  console.log(imgdata)

  return (
    <>
    <div>
        Home page
        <div className={styles.container}>
        {
      imgdata?.map((el,ind)=>{
       return  <div className={styles.imgdiv} key={ind} >
          <img src={el.imgurl}></img>
          <div>Image Code {el.imgCode}</div>
         <button onClick={()=>DownloadFile(el.imgurl)}>Download</button>
        </div>
      })
        }
        </div>
  
    </div>
    </>
  );
};

export default Home;
