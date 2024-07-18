import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Client/Home';
import About from './pages/Client/About';
import UsedCars from './pages/Client/UsedCars';
import ExploreNewCars from './pages/Client/ExploreNewCars';
import Services from './pages/Client/Services';
import Support from './pages/Client/Support';
import Login from './components/Client/Login';
import Register from './components/Client/Register';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/used-cars" element={<UsedCars />} />
      <Route path="/explore-new-cars" element={<ExploreNewCars />} />
      <Route path="/services" element={<Services />} />
      <Route path="/support" element={<Support />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
