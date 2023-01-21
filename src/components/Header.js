import React from "react";
import styled from "styled-components";
import Logo from './Logo.png';
import Vector from './Illustrations/undraw_personal_trainer_re_cnua.svg'
import Navigation from "./Navigation";
function Header(){
    return(
        <Container>
            <LogoImage src={Logo} alt="Logo"/>
            <Navigation />
        </Container>
    )
}
const Container= styled.div`
    display: flex ;
    justify-content: space-between;
    padding-left: 8em ;
    padding-right:8em;
    margin-top: 1em ;
    margin-bottom:0em ;
`;
const LogoImage=styled.img`

    height:4.5em;
`;
export default Header;