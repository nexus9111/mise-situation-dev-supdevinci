import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import ProfilPage from './pages/ProfilPage';

function App() {
  const [token, setToken] = useState();

  return (
    <BrowserRouter>
      <div className="content-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
          <Route path="/profile" element={<ProfilPage token={token} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;