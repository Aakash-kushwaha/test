import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);

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

    let token = JSON.parse(localStorage.getItem("user"))
    if (!file) {    
      return alert('No file selected');
    }
    const base64 =await convertBase64(file)
    console.log(base64,"base64")
    try {
      axios.post('http://localhost:5000/user/fileupload', {image:base64},
      {
        headers:{
            Authorization:token && token.token
        }
      }).then((res)=>alert("File has been Uploaded"))
      ;
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
