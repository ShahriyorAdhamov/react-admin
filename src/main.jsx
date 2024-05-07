import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import { ContextProvider } from './contexts/ContextProvider.jsx';
import './index.css';

const rootNode = document.getElementById('root');
ReactDOM.render(  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>, rootNode);

