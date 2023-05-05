import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from '../pages/User'
import Posts from '../pages/Posts'
import Postdetails from '../pages/Postdetails'

const Allroutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home></Home>}></Route>
      <Route path={"/posts/:id"} element={<Posts></Posts>}></Route>
      <Route path={"/postdetails/:id"} element={<Postdetails></Postdetails>}></Route>
    </Routes>
  )
}

export default Allroutes