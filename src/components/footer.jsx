import React from 'react';
import styled from 'styled-components';

const Copyright = styled.div`
    letter-spacing: 1px;
    text-align: center;
    padding: 0 10%;
`;

const Footer = (props) => {
    return(
        <>
            <Copyright>
                &copy;{props.year} Joel Shaw. All Rights Reserved.
            </Copyright>
        </>
    );
}

export default Footer;