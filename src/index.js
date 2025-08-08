import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Use basename only in production (GitHub Pages)
const basename = process.env.NODE_ENV === 'production' ? '/Basti-ki-pathshala' : undefined;

root.render(
  <BrowserRouter basename={basename}>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);

reportWebVitals();
