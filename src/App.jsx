import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes/>
      </div>
    </BrowserRouter>
  )
}

export default App