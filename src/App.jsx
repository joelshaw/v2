import React from 'react';
import styled from 'styled-components';

import Header from './components/header';
import Introduction from './components/introduction';

const textColor = '#fff';
const darkBlue = '#242e3c';

const IntroductionCard = styled.div`
    background: ${darkBlue};
    color: ${textColor};
    position: absolute;
    top: 0;
    width: 100%;
    height: 70vh;
`;

const App = () => {
  return (
    <>
      <Header />
      <IntroductionCard>
        <Introduction></Introduction>
      </IntroductionCard>
    </>
  );
}

export default App;
