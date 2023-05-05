import React, { useState } from 'react';
import axios from "axios"
import styles from "../Styles/Home.module.css"
import { saveAs } from "file-saver";

const Home = ({ login, setLogin }) => {
  const [imgdata, setImgData] = React.useState([])
  const [modal, setModal] = React.useState(false)
  const [inputdata, setInputData] = useState('');

  const DownloadFile = () => {
 
  let token = JSON.parse(localStorage.getItem("user"))
  console.log(token.token,"token")
       try {
        login && modal &&    axios.post('http://localhost:5000/user/checkcode', {imgCode:inputdata},
      {
        headers:{
            Authorization:token.token
        }
      }).then((res)=>{
        alert("Image is Downloading")
        saveAs(modal)
        setModal("")
      }).catch((err)=>{
        alert("Wrong Image Code")
        setModal("")
      })
    } catch (error) {
      console.error("err:::", error);
    }

   
  }


  React.useEffect(() => {

    let token = JSON.parse(localStorage.getItem("user"))
    // console.log(token, "token")
    token && axios({
      method: 'get',
      url: `http://localhost:5000/user/userdata`,
      headers: {
        Authorization: token.token,
      },
    })
      .then((res) => setImgData(res.data.userData))
      .catch((err) => console.log(err))
  }, [login])
  console.log(imgdata,"data")

  return (
    <>
      <div>
       <h2>Home page</h2> 
        <div className={styles.container}>
          {
            imgdata?.map((el, ind) => {
              return <div className={styles.imgdiv} key={ind} >
                <img src={el.imgurl}></img>
                <div>Image Code {el.imgCode}</div>
                <button onClick={()=>setModal(el.imgurl)}>Download</button>
              </div>
            })
          }
        </div>

        <div className={styles.modal}  style={{display:modal?"block":"none"}}>
        <h3>Insert the Image Code</h3>
        <input type="text" id="fname" name="firstname" placeholder="Insert Code" value={inputdata}
        onChange={(event) => setInputData(event.target.value)}></input>
        <input type="submit" value="Submit" onClick={() => DownloadFile()}></input>
        </div>

      </div>
    </>
  );
};

export default Home;
