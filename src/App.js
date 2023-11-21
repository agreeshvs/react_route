import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { Profile } from './components/Profile';
import { AuthProvider } from './components/Auth';
import { Login } from './components/Login';
import { RequiredAuth } from './components/RequiredAuth';
const LazyAbout = React.lazy(()=> import('./components/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={
          <React.Suspense fallback='Loading ...'>
            <LazyAbout />
          </React.Suspense>} />
        <Route path='order-summary' element={<OrderSummary />} />
        <Route path='products' element={<Products />} >
          <Route index element={<FeaturedProducts />}/>
          <Route path='featured' element={<FeaturedProducts />}/>
          <Route path='new' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='profile' element={
          <RequiredAuth><Profile /> </RequiredAuth>} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
    
  );
}

export default App;
