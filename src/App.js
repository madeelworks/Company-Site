import React from 'react';
import Header from './components/Header/Header';  // Correct path
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Privacy from './components/Privacy/Privacy';
import Terms from './components/Terms/Terms';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the child route components */}
      </main>
      <Footer />
    </>
  );
}

export default App;
