import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import Introduction from './components/introduction';
import Technologies from './components/technologies';
import Testimonials from './components/testimonials';

const currentYear = () => {
  const date = new Date();
  return date.getFullYear();
}

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Technologies />
      <Testimonials />
      <Footer year={currentYear()} />
    </>
  );
}

export default App;
