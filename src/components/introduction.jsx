import React from 'react';
import styled from 'styled-components';
import { LocationPin } from '@styled-icons/entypo/LocationPin';

const darkBlue = '#242e3c';
const white = '#ffffff';

const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: center;
    position: relative;
    padding: 0 10%;
    background: ${darkBlue};
    color: ${white};
    position: relative;
    top: 0;
    width: 100%;
    height: 70vh;

    h1 {
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0.15em;
    }

    h2 {
        font-size: 1.65em;
        line-height: 2.5em;
        margin-bottom: 0.5em;
    }

    h2, h3 {
        margin: 0;
    }

    svg {
        font-size: 0.2em;
        width: 30px;
        padding: 0 2em;
        padding-left: 0;
    }
`;

const Introduction = () => {
    return(
        <StyledIntro>
            <h1>Who is Joel Shaw?</h1>
            <h2>Software Engineer. Photographer. Disability Advocate.</h2>                
            <h3><LocationPin />Nashville, TN</h3>
        </StyledIntro>
    );
}

export default Introduction;