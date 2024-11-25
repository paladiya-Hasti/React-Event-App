import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignupForm from './SignupForm'

const Router = () => {
  return (
    <div>
       <Routes>
      
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Router