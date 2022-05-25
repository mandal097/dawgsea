import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart';
import Register from './pages/Auth/Register/Register';
import Login from './pages/Auth/Login/Login';
import ForgotPassword from './pages/Auth/ForgotPassoword/ForgotPassword';
import Account from './pages/Account/Account';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path='/*'>
            <Route index element={<Shop />} />
            <Route path='product/:id' element={<Product />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<Checkout />} />
            <Route path='orders' element={<Orders />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='myaccount' element={<Account />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App