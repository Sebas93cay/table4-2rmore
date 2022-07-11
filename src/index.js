import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './ui/App/App';
import reportWebVitals from './reportWebVitals';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './ui/pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
