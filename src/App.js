import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import { ScaleLoader } from 'react-spinners';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';

function App() {

  const [loading , setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    } , 1000)
  }, [])

  return (
    <div className="App">

      {
        loading ?
        <div className='scaleLode'><ScaleLoader color="#f87756" height={100} margin={7} radius={59} width={9} /></div> :
        <>
        <AppNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Projects' element={<Projects />} />
        </Routes>
        </>
      }
    </div>
  );
}

export default App;
