import React from 'react';
import styled from 'styled-components';
import { Airplane } from '@styled-icons/ionicons-outline/Airplane';


const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    justify-content: center;
    position: absolute;
    left: 15%;
`;

const StyledHeadline = styled.h1`
    font-size: .5em;
    line-height: 5em;
    text-transform: uppercase;
    letter-spacing: 0.15em;
`;

const StyledSubheadline = styled.h2`
    font-size: 1.25em;
    line-height: 2.5em;
    margin-bottom: 0.5em;
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
            <StyledSubheadline>
                <h2>A senior software engineer, photographer, and speaker.</h2>                
            </StyledSubheadline>
            <h3>Richmond, VA <LocationArrow /> Nashville, TN</h3>
        </StyledIntro>
    );
}

export default Introduction;