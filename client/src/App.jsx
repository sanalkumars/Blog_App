import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import SignUp from './pages/SignUp'
import Header from './components/Header'

const App = () => {
  return (

    <BrowserRouter>
    <Header />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/project' element={<Project />} />
          <Route path='/dashboard' element={<Dashboard />} />
       </Routes>
    </BrowserRouter>

  )
}

export default App