import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import MyFood from './Components/MyFood/MyFood';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { logoutUser } from "./Feature/userReducer";
import Terms from './Components/Terms/Terms';
import Contact from './Components/Contact/Contact';

const App = () => {
  const dispatch = useDispatch();

  const scheduleTokenExpiryCheck = () => {
    console.log("Checking but it is fine")
    const storedExpiry = localStorage.getItem("tokenExpiry");
    if (storedExpiry) {
      const expiryDate = new Date(storedExpiry);
      const now = new Date();
      const timeRemaining = expiryDate - now;

      if (timeRemaining > 0) {
        // Set a timeout for the remaining time
        setTimeout(() => {
          dispatch(logoutUser());
          alert("Your session has expired. Please log in again.");
        }, timeRemaining);
      } else {
        // Token is already expired
        dispatch(logoutUser());
        alert("Your session has expired. Please log in again.");
      }
    }
  };

  useEffect(() => {
    // Schedule the token expiry check on app load
    scheduleTokenExpiryCheck();
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/my-food' element={<MyFood />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/terms' element={<Terms/>} />
          <Route path='/contact' element={<Contact/>} />
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
