import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Footer from './components/Footer';

import HomePage from './pages/Home';
import SearchPage from './pages/SearchPage';
// import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  // const [token, setToken] = useState();

  // const token = getToken();

  // if (!token) {
  //   return (
  //     <BrowserRouter>
  //       <div className="content-layout">
  //         <Routes> 
  //           <Route path="/" element={<Login setToken={setToken} />} />
  //           <Route path="/register" element={<Register />} />
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
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;