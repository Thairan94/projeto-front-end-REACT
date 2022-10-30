import React from 'react';
import styled from 'styled-components';

function NavBar() {
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

export default NavBar;

const Nav = styled.nav`
    display: flex;
    margin: 33px;
    align-items: center;
    justify-content: space-between;
    width: auto;
    
    @media  (max-width: 1065px) {
        width: 800px;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        display: flex;
        padding: 18px 0;
    }

    h2 {
        color: #fff;        
        padding: 0 10%;
    }
`

const NavMenu = styled.div`
    display: flex;
    gap: 51px;

    @media (max-width: 1065px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
    a {  
        color: #fff;
        text-decoration: none;
        padding: 0 10px;
        margin: 0 5px; 
    }
`