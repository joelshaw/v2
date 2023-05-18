import React from 'react';
import styled from 'styled-components';
import { Airplane } from '@styled-icons/ionicons-outline/Airplane';


const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: center;
    position: absolute;
    left: 25%;
`;

const StyledHeadline = styled.h1`
    font-size: .5em;
    line-height: 5em;
    text-transform: uppercase;
    letter-spacing: 0.15em;
`;

const LocationArrow = styled(Airplane)`
    font-size: 0.2em;
    width: 30px;
    padding: 0 2em;
`;

const Introduction = () => {
    return(
        <StyledIntro>
            <StyledHeadline>
                <h1>Who is Joel Shaw?</h1>
            </StyledHeadline>
            <h2>A senior software engineer, photographer, and speaker.</h2>
            <h3>Richmond, VA <LocationArrow /> Nashville, TN</h3>
        </StyledIntro>
    );
}

export default Introduction;