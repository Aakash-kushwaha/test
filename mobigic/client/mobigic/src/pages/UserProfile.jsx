import React from 'react'

export const UserProfile = () => {
    const [user,setUser ] = React.useState({})
    React.useEffect(()=>{
        let userProfile = JSON.parse(localStorage.getItem("user"))
        userProfile && setUser(userProfile)
    },[])
  return (
    <div>
        {
            user ?<>
            <h3>Name  : {user.name}</h3>
            <h3>Email Id : {user.email}</h3>
            <h3>User Id : {user._id}</h3>
            </> :""
        }
    </div>
  )
}
