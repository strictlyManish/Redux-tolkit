import Navigation from './components/Navigation'
import Mainroutes from './routes/Mainroutes'

function App() {
  return (
    <div className='h-screen w-screen bg-gray-800 text-white px-15 py-5 overflow-hidden select-none'>
      <Navigation/>
      <Mainroutes/>
    </div>
  )
}

export default App