import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Footer from './components/Footer';

import HomePage from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
// import funcs from './services/auth';
function App() {
  const [token, setToken] = useState();

  // const token2 = funcs.getToken(); 

  // if (!token) {
  //   return (
  //     <BrowserRouter>
  //       <div className="content-layout">
  //         <Routes> 
  //           <Route path="/" element={<Login setToken={setToken} />} />
  //           <Route path="/register" element={<Register setToken={setToken} />} />
  //         </Routes>
  //       </div>
  //     </BrowserRouter>
  //   );
  // }

  return (
    <BrowserRouter>
      <div className="content-layout">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register setToken={setToken}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;