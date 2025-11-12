// index.tsx
import React from 'react';
import 'core-js/stable';
import { createRoot } from 'react-dom/client';
import 'regenerator-runtime/runtime';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Enable Webpack Hot Module Replacement (HMR)
if (import.meta && import.meta.hot) {
  // This branch is for Vite-style environments — harmless fallback
  import.meta.hot.accept();
} else if (module && module.hot) {
  // This branch is for Webpack HMR
  module.hot.accept('./components/App/App', () => {
    const NextApp = require('./components/App/App').default;
    root.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>
    );
  });
}
