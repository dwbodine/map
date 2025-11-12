// index.tsx
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/components/App/App';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './index.css';

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
    const NextApp = App;
    root.render(
      <React.StrictMode>
        <NextApp />
      </React.StrictMode>
    );
  });
}
