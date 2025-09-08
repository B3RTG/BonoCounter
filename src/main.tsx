import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SaldoMovimientos from './pages/SaldoMovimientos';
import Recarga from './pages/Recarga';
import Descuento from './pages/Descuento';
import ConfigReglas from './pages/ConfigReglas';
import ConfigApp from './pages/ConfigApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SaldoMovimientos />} />
          <Route path="recarga" element={<Recarga />} />
          <Route path="descuento" element={<Descuento />} />
          <Route path="config-reglas" element={<ConfigReglas />} />
          <Route path="config-app" element={<ConfigApp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
