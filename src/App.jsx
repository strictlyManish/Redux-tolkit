import Navigation from './components/Navigation';
import Mainroutes from './routes/Mainroutes';
function App() {
  return (
    <div className="h-screen w-screen bg-gray-900 text-white py-5 overflow-x-hidden">
      <Navigation />
      <Mainroutes />
    </div>
  )
}

export default App