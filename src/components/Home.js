import React from 'react'
import styled from 'styled-components';
import computer01 from '../images/imagem01.png'

function Home() {
    return (
        <Container>
            <Content>
                <h1>Esse texto é uma <br/>
                    headline super legal
                </h1>
                <p>
                    E esse texto aqui acompanha o título. Já que eu preciso falar <br></br>
                    muito, vou falar sobre Emas. Considerada a maior ave<br></br>
                    continente americano, a ema pode chegar a medir 1,70 m<br></br>
                    de altura! impressionante, não né?
                </p>
                <Button>Isso aqui é CTA</Button>
            </Content>           
                <img src={computer01} alt="imagem1" />            
        </Container>
    )
}

export default Home;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 17px;
    margin-top: 18.5px;
    width: 100%;
    

    @media (max-width: 1065px) {
        width: 800px;
        flex-direction: column;
        text-align: center;
        justity-content: center;
        display: flex;
        margin-top: -20px;
        
        
        
    }

    
    img {
        width: 450px;
        height: 450px;
        margin-right: 128px;
        

        @media (max-width: 1065px) {
        width: auto;
        align-items: center;
        margin-top: -60px;
        
    }
        
    }
`

const Content = styled.div`
        
        padding: 0 10%;
        max-width: 100%; 
        margin-top: 10px;
        
        @media (max-width: 1065px) {
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 0 10%;
        overflow: hidden;
        display: flex;
        
        
    }

    h1 {
        font-size: 2rem;
        color: #fff;        
    }

    p {
        font-size: 1.rem;        
        color: #fff;        
    }
`

const Button = styled.button`
    width: 250px;
    height: 50px;
    margin-top: 10px;
    border: none; 
    border-radius: 68px;
    background-color: #0DE67B;
    color: #fff;
    cursor: pointer;

`
