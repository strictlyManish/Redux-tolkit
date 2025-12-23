import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy-loaded pages/components
const Home = lazy(() => import('../pages/Home'))
const Project = lazy(() => import('../pages/Project'))
const Contact = lazy(() => import('../pages/Contact'))
const About = lazy(() => import('../pages/About'))
const ImageEditor = lazy(() => import('../components/ImageEditor'))

function Mainroutes() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading... </div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/edit' element={<ImageEditor />} />
      </Routes>
    </Suspense>
  )
}

export default Mainroutes
