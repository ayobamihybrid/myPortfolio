import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/EXperience';
import Tech from './components/Tech';
import Works from './components/Works';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Stars from './components/canvas/Stars';

import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedback />
        <div className="relative z-0">
          <Contact />
          <Stars />
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
