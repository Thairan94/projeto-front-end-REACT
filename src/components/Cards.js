import React from "react";
import styled from 'styled-components'

import computer01 from '../images/Group 1066.png'
import computer02 from '../images/pc2.png'

function Cards() {
    return (
        <Container>
            <Texts>
                <h1>Conheça</h1>
                <p>
                    Ema, também conhecida como nadu, nhandu, guaripé e xuri, é uma ave da família Rheidae nativa da<br></br>
                    América do Sul. Apesar de possuir grandes asas, é uma ave não voadora.
                </p>
            </Texts>
            
            <Content>
                <Informations>
                    <h2>99% dos dados adicionados sem<br></br>
                        fonte não possuem veracidade.</h2>
                    <p>
                        Inclusive esse texto aqui, que não possui fundo<br></br>
                        científico algum e é 100% errado. Lorem ipsum<br></br>
                        dolor sit amet, consectetur adipiscing elit.
                    </p>                
                    <img src={computer01} alt="imagem1" />
                </Informations>

                <Informations>
                    <h2>Aumento de 24% em vendas</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in<br></br> 
                        voluptate velit esse cillum dolore eu fugiat<br></br> 
                        nulla pariatur. Excepteur sint occaecat<br></br> 
                        cupidatat non proident, sunt in culpa qui<br></br>  
                        officia deserunt mollit anim id est laborum
                    </p>                
                    <img src={computer02} alt="imagem1" />
                </Informations>
            </Content>
        </Container>
    )
}

export default Cards;

const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1065px) {
        width: 800px;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
        gap: 5rem;
        padding: 18px 75px;
        overflow: hidden;
        display: flex;
    }
    
`

const Texts = styled.div`
    align-items: center;
    flex-direction: column;

    @media (max-width: 1065px) {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
        gap: 5rem;
    }
   
   h1 {
    font-size: 50px;
    color: white;
    font-weight: 700;
    justify-content: center;
    text-align: center;
    align-items: center;
   }

   p {
    font-size: 20px;
    color: white;
    font-weight: 400;
    justify-content: center;
    text-align: center;
    align-items: center;
   }
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 1065px) {
        width: 100%;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
        overflow: hidden;
        
        padding: 18px 2%;
    }
`

const Informations = styled.div`
    background-color: white;
    width: 463px;
    height: 578px;
    border-radius: 10px;
    margin: 30px;
    display: flex;
    flex-direction: column;

    @media (min-width: 375px) {
        @media (max-width: 549px){
             
                width: 300px;
            
        }
    } 
    
    @media (min-width: 375px) {
        @media (max-width: 549px){
            gap: 20px;
                width: 300px;
            
        }
    } 
    @media (min-width: 550px) {
        @media (max-width: 768px){
            gap: 20px;
            img {
                width: 400px;
            }
        }
    } 

    h2 {
    margin-top: 50px;
    font-size: 18px;
    color: #0F123F;

    @media (min-width: 375px) {
        @media (max-width: 549px){
            
              font-size: 18px;
            
        }
    } 
    @media (min-width: 550px) {
        @media (max-width: 768px){
            
                font-size: 14px;
            
        }
    } 

    }
`