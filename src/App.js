import './App.css';
import { Route,Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
    
  );
}

export default App;
