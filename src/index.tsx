import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/roboto'; 
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
);

