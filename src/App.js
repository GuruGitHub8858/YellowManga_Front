import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
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
import Payment from './pages/Payment';
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
        {isLoggedIn && <NavBar />} {/* Render Navbar if logged in */}
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <SignIn setLoggedIn={setLoggedIn} />} />
          <Route path="/shop" element={isLoggedIn ? <Shop /> : <Navigate to="/" />} />
          <Route path="/shop/:id" element={isLoggedIn ? <Product /> : <Navigate to="/" />} />
          <Route path="/cart" element={isLoggedIn ? <Cart /> : <Navigate to="/" />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <div className='foot'>
          {isLoggedIn && <Footer />} {/* Render Footer if logged in */}
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
