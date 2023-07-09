import React from 'react';
import styled from 'styled-components';

import Header from './components/header';
import Footer from './components/footer';
import Introduction from './components/introduction';
import Testimonials from './components/testimonials';

const textColor = '#fff';
const darkBlue = '#242e3c';

const currentYear = () => {
  const date = new Date();
  return date.getFullYear();
}

const IntroductionCard = styled.div`
    background: ${darkBlue};
    color: ${textColor};
    position: relative;
    top: 0;
    width: 100%;
    height: 70vh;
`;

const App = () => {
  return (
    <>
      <Header />
      <Introduction />
      <Testimonials />
      <Footer year={currentYear()} />
    </>
  );
}

export default App;
