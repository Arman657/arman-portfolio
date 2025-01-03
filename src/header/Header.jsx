import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Assingnment from './Assingnment'
import Login from './Login'
import Navigation from './Navigation'
import ProtectedRoutes from './ProtectedRoutes'
import Projects from './Projects'


const Header = () => {
  return (
    <div>
<BrowserRouter>
<Navigation/>
  <Routes>
    <Route element={<ProtectedRoutes/>}>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/assignment' element={<Assingnment/>}></Route>
    <Route path='/myprojects' element={<Projects/>}></Route>
    
    </Route>
    <Route path='/' element={<Home/>}></Route>
    
    <Route path='/contact' element={<Contact/>}></Route>

    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/logout' element={<Login/>}></Route>
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default Header;
