export  const getUsers =async(setState,setLoading)=>{
       
    try{
     let res = await fetch("https://jsonplaceholder.typicode.com/users")
     res = await res.json()
     if(res) setState(res)
     setLoading(false)
    }
    catch(err){
     console.log(err)
     alert("something went wrong")
     setLoading(false)
    } 
 }


export const getPostById =async(id,setState,setLoading,navigate)=>{
    try{
        let posts = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        posts = await posts.json()
        if(posts) setState(posts)
        setLoading(false)
    }catch(err){
        alert("something went wrong")
        navigate("/")
        setLoading(false)
    }
      

}

export  const getCommentsById = async (id,setState,setLoading) => {
    try {
      let Comments = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      Comments = await Comments.json();
      if (Comments) setState(Comments);
      setLoading(false);
    } catch (err) {
      alert("something went wrong");
      setLoading(false);
    }
  };