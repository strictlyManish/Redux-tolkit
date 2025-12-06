import Navigation from './components/Navigation'
import Mainroutes from './routes/Mainroutes'

function App() {
  return (
    <div className='h-screen w-screen bg-gray-800 text-white px-15 py-2 overflow-auto select-none'>
      <Navigation/>
      <Mainroutes/>
    </div>
  )
}

export default App