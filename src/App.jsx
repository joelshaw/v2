import styled from 'styled-components';
import Introduction from './components/introduction';

const textColor = '#fff';
const darkBlue= '#0a192f';

const IntroductionCard = styled.div`
    color: ${textColor};
    height: 100vh;
`;

const App = () => {
  return (
    <IntroductionCard>
      <Introduction></Introduction>
    </IntroductionCard>
  );
}

export default App;
