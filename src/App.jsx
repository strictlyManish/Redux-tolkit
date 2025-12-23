import Navigation from './components/Navigation';
import Footer from './pages/Footer';
import Mainroutes from './routes/Mainroutes';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d10] text-gray-200 overflow-x-hidden pt-5">
      <Navigation />
      <Mainroutes />
      <Footer/>
    </div>
  );
}

export default App;
