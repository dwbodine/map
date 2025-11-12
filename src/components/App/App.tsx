// App.tsx
import React from 'react';
import '../App/App.css';

import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div id="main_container">
      <Navigation />
      <Footer />
    </div>
  );
};

export default App;
