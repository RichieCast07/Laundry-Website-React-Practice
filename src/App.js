import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import Promotions from './components/pages/Promotions';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/promotions" element={<Promotions />} />
  </Routes>
);

export default App;
