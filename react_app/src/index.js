import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Post} from './Post.js'
import {BrowserRouter} from 'react-router-dom'
import "../node_modules/react-bootstrap/dist/react-bootstrap";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
 <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
