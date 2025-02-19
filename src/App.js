import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
// routing
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css'
import Checkout from './pages/Checkout';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {isLoggedIn && <NavBar />}
        <Routes>
          <Route path="/" element={isLoggedIn ? <HomeFooterAware setLoggedIn={setLoggedIn} /> : <SignIn setLoggedIn={setLoggedIn} />} />
          <Route path="/shop" element={isLoggedIn ? <ShopFooterAware /> : <Navigate to="/" />} />
          <Route path="/shop/:id" element={isLoggedIn ? <ProductFooterAware /> : <Navigate to="/" />} />
          <Route path="/cart" element={isLoggedIn ? <CartFooterAware /> : <Navigate to="/" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<Checkout />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

// Helper components for conditional footer rendering

const HomeFooterAware = ({ setLoggedIn }) => {
  return <Home setLoggedIn={setLoggedIn} />;
};

const ShopFooterAware = () => {
  return <Shop />;
};

const ProductFooterAware = () => {
  return <Product />;
};

const CartFooterAware = () => {
  return <Cart />;
};

export default App;
