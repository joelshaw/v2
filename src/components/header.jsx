import React from 'react';
import styled from 'styled-components';

import { Download } from '@styled-icons/boxicons-regular/Download';

const darkBlue = '#242e3c';
const white = '#ffffff';
const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 9999;
    background: ${white};
    margin: 2em auto 0;
    border-radius: 3em;
    box-shadow: 0 3px 13px rgba(0,0,0,0.5);
    padding: 0.5em;
    width: 85%;
`;

const HeaderStyleContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
        font-size: 1.5em;
        margin: 0 0 0 0.8em;
        text-transform: uppercase;
    }
`;

const HeaderStyleBtns = styled.button`
    float: right;
    border: 2px solid #cecece;
    border-radius: 3em;
    padding: 1em;
    background: transparent;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    transition: .1s linear all;
    display: flex;
    align-items: center;

    svg {
        margin-right: 0.5em;
        width: 30px;
    }

    p {
        margin: 0;
    }

    &:hover {
        cursor: pointer;
        background: ${darkBlue};
        color: ${white};
        border-color: ${white};
    }
`;

const Header = () => {
    return(
        <>
            <HeaderStyle>
                <HeaderStyleContainer>
                    <h1>Joel Shaw</h1>
                    <HeaderStyleBtns>
                        <Download />
                        <p>Download CV</p>
                    </HeaderStyleBtns>
                </HeaderStyleContainer>
            </HeaderStyle>
        </>
    );
}

export default Header;