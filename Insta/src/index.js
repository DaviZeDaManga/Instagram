import './index.scss'

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Insta from './pages/Instagrao';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Insta/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


