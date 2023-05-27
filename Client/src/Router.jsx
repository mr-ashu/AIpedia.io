import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './Pages/LandingPage'

export const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<LandingPage/>}/>
    </Routes>
  )
}
