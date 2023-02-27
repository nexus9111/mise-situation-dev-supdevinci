import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Footer from './components/Footer';

import HomePage from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';

function App() {

  // const token = getToken();

  // if (!token) {
  //   return (
  //     <BrowserRouter>
  //       <div className="content-layout">
  //         <Routes> 
  //           <Route path="/" element={<Login />} />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;