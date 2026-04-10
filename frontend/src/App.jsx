import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './signUp';
import SignedUp from './signedUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signedUp" element={<SignedUp />} />
        <Route path="/" element={<Navigate to="/signUp" />} />
        <Route path="*" element={<div className="form"><h1>404 - Страница не найдена</h1></div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;