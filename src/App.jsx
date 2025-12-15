import Navigation from './components/Navigation'
import Mainroutes from './routes/Mainroutes'

function App() {
  return (
    <div className='h-screen w-screen bg-gray-800 text-white py-4 overflow-hidden'>
      <Navigation/>
      <Mainroutes/>
    </div>
  )
}

export default App