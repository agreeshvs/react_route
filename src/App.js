import './App.css';
import { Route,Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
      </Routes>
    </>
    
  );
}

export default App;
