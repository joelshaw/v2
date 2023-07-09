import React from 'react';
import styled from 'styled-components';

import { Download } from '@styled-icons/boxicons-regular/Download';
import { Bluetooth } from 'styled-icons/bootstrap';

const darkBlue = '#242e3c';
const white = '#ffffff';
const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9999;
    background: ${white};
    margin: 2em auto 0;
    border: 1px solid #cecece;
    border-radius: 3em;
    padding: 0.5em;
    width: 85%;
`;

const HeaderStyleContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
        margin: 0 0 0 0.8em;
        text-transform: uppercase;
    }
`;

const HeaderStyle__btns = styled.button`
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
                    <HeaderStyle__btns>
                        <Download />
                        <p>Download CV</p>
                    </HeaderStyle__btns>
                </HeaderStyleContainer>
            </HeaderStyle>
        </>
    );
}

export default Header;