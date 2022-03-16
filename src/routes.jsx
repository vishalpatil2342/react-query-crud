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
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/characters"}>Characters</NavLink>
      </div>
      <div>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/characters' element={ <Charactes/> }/>
          <Route path='/characters/:id' element={ <CharacterById/> }/>
        </Routes>
      </div>
    </>
  )
}

export default routes