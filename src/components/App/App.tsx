// App.tsx
import React from 'react';
import './App.css';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  return (
    <div id="main_container">
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
