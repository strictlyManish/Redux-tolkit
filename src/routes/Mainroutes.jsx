import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Project from '../pages/Project'
import Contact from '../pages/Contact'
import About from './../pages/About';
import ImageEditor from '../components/ImageEditor';

function Mainroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/edit' element={<ImageEditor/>} />
    </Routes>
  )
}

export default Mainroutes