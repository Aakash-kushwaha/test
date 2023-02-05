import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  let token = JSON.parse(localStorage.getItem("user"))
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };


  
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {    
      return alert('No file selected');
    }
    const base64 =await convertBase64(file)
    console.log(base64,"base64")
    try {
      token &&  axios({
            method: 'post',
            url: `http://localhost:5000/user/fileupload`,
            headers:{
              Authorization:token.token ,
            
            },
            data:{
                image:base64
            }
          })
      .then((res)=>console.log(res))
      .catch((err)=>console.log(err))
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="file" onChange={handleChange} /> */}
      <input type="file" name='image' onChange={handleChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default FileUpload;
