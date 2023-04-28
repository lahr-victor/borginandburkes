// PACKAGE IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';

// VALUE IMPORTS
import App from './App';
import GlobalStyle from './assets/styles/GlobalStyle';
import ResetStyle from './assets/styles/ResetStyle';

// GLOBAL CONSTANTS
const root = ReactDOM.createRoot(document.getElementById('root'));

// FUNCTIONS
root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
