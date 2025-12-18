import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import About from './../pages/About';

function Mainroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
    </Routes>
  )
}

export default Mainroutes