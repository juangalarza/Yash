import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route} from "react-router-dom";
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={window.location.pathname || ''}>
      <Route path='/' element={<App/>} />
   </BrowserRouter>
);


