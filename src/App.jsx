import Navigation from './components/Navigation';
import Mainroutes from './routes/Mainroutes';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d10] text-gray-200 overflow-x-hidden pt-5">
      <Navigation />
      <Mainroutes />
    </div>
  );
}

export default App;
