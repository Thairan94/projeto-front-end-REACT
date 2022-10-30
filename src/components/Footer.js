import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Nav>
            <h2>DATANOW</h2>
            <NavMenu>
                <a href='/#'>Início</a>
                <a href='/#'>Conheça</a>
                <a href='/#'>Funcionalidades</a>
                <a href='/#'>Contato</a>
            </NavMenu>
        </Nav>
    )
}

export default Footer;

const Nav = styled.nav`
    display: flex;
    margin-top: 33px;
    margin-bottom: 33px;
    align-items: center;
    border-top: 1px solid #0f123f;
    width: 100%;
    height: 160px;
    justify-content: space-between;
    background: #fff;
    
    @media  (max-width: 1065px) {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        display: flex;
        padding: 18px 75px;
    }

    h2 {
        color: #0f123f;        
        padding: 0 10%;
    }
`

const NavMenu = styled.div`
    display: flex;
    padding: 0 10%;

    @media (max-width: 1065px) {
        
        flex-wrap: wrap;
        flex-direction: column;
    }
    a {  
        color: #0f123f;
        text-decoration: none;
        padding: 0 10px;
        margin: 0 5px; 
    }
`