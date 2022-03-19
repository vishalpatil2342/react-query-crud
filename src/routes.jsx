import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import CharacterById from './pages/CharacterById'
import Charactes from './pages/Charactes'
import Home from './pages/Home'

const routes = () => {
  return (
    <>
      <div className='bg-red-200 w-screen'>
        <div className='bg-red-200 h-20 flex ml-4 items-center gap-4 w-50'>
          <NavLink to={"/"} className="no-underline text-xl text-black font-bold">Home</NavLink>
          <NavLink to={"/characters"} className="no-underline text-xl text-black font-bold">Characters</NavLink>
        </div>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<Charactes />} />
          <Route path='/characters/:id' element={<CharacterById />} />
        </Routes>
      </div>
    </>
  )
}

export default routes