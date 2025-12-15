import Navigation from './components/Navigation';
import Mainroutes from './routes/Mainroutes';
function App() {
  return (
    <div className="h-screen w-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white py-4 overflow-hidden">
      <Navigation />
      <Mainroutes />
    </div>
  )
}

export default App