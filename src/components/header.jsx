import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    z-index: 9999;
    background: #fff;
    margin: 2em auto 0;
    border: 1px solid #cecece;
    border-radius: 3em;
    padding: 1em;
    width: 80%;
`;

const HeaderStyleContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const HeaderStyleText = styled.h1`
    margin: 0;
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

    &:hover {
        cursor: pointer;
        background: red;
    }
`;

const Header = () => {
    return(
        <>
            <HeaderStyle>
                <HeaderStyleContainer>
                    <HeaderStyleText>header</HeaderStyleText>
                    <HeaderStyle__btns>Download CV</HeaderStyle__btns>
                </HeaderStyleContainer>
            </HeaderStyle>
        </>
    );
}

export default Header;