import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Collection } from './Pages/Collection'
import { SubNavbar } from './Components/Home/SubNavbar'
import { Tool } from './Pages/Tool'
import { Top10 } from './Pages/Top10'
import { CollectionSinglepage } from './Pages/CollectionSinglepage'
import { Submit } from './Pages/Submit'
import { Signup } from './Pages/Signup'
import { Login } from './Pages/Login'
import { Profile } from './Pages/Profile'
import { Creaters } from './Pages/Creaters'
import { MycollectionSingle } from './Pages/MycollectionSingle'
import SearchPage from './Pages/SearchPage'
import { Privacy } from './Pages/Privacy'
 
export const Router = () => {

 

  return (
    <>
 

          <Routes>
          
          <Route path="/" element={<SubNavbar />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:id" element={<CollectionSinglepage />} />
            <Route path="/tool/:id" element={<Tool />} />
            <Route path="/top10" element={<Top10 />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile_setting" element={<Profile />} />
            <Route path="/creator" element={<Creaters />} />
            <Route path="/mycollection/:id" element={<MycollectionSingle />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>

    
    </>

  )
}
