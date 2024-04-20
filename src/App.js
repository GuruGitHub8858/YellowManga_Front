import './App.css'
import React from 'react'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<SignIn />} />
          <Route path='/' element={<SignUp />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
