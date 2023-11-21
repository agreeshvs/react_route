import './App.css';
import { Route,Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='products' element={<Products />} >
          <Route index element={<FeaturedProducts />}/>
          <Route path='featured' element={<FeaturedProducts />}/>
          <Route path='new' element={<NewProducts />} />
        </Route>
      </Routes>
    </>
    
  );
}

export default App;
