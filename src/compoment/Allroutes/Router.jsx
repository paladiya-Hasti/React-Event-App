import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Signup'
import Login from '../Login'
import { Home } from '../../pages/Home'
import PrivateRouter from '../PrivateRouter'

const Router = () => {
  
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<PrivateRouter><Home/></PrivateRouter>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
  )
}

export default Router