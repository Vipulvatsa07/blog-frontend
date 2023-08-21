import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import "./App.css"
import HeroSection from './components/HeroSection'
import Home from './pages/Home'
import Services from './pages/Services'
import AdminLogin from './components/AdminLogin'
import SingleBlogPage from './pages/SingleBlogPage'
import AboutMe from './components/AboutMe'
const App = () => {
  return (
    <div style={{width:"100%"}}>
       <Navbar/>
    <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/blogs' exact element={<Services/>} />
       <Route path='/aboutme' exact element={<AboutMe/>} />
       <Route path="/blogs/:id"  element={<SingleBlogPage/>}/>
       <Route path="/adminLogin" exact element={<AdminLogin/>}></Route>
    </Routes>
   
    {/* <HeroSection/> */}
    
      </div>
    
  )
}

export default App