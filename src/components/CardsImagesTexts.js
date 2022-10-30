import React from 'react'
import styled from 'styled-components'
import cardsImage from '../images/Group 1080.png'
import cardasImage2 from '../images/Group 1081.png'
import cardasImage3 from '../images/Group 1082.png'
import cardasImage4 from '../images/Group 1083.png'

function CardsImagesTexts() {
    return (
        <>
            <Container>
                <Content>
                    <h1>Lorem ipsum dolor <br/>sit amen</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error<br></br>
                        sit voluptatem accusantium doloremque<br></br> 
                        laudantium, totam rem aperiam, eaque ipsa<br></br> 
                        quae ab illo inventore veritatis et quasi
                    </p>
                </Content>
                    <ContentImg>
                        <img src={cardsImage} alt='card' />
                    </ContentImg>
            </Container>

            <Container>
                <ContentImg>
                        <img src={cardasImage2} alt='card' />
                </ContentImg>

                <Content>
                    <h1>Lorem ipsum <br></br>dolor sit amen</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error<br></br>
                        sit voluptatem accusantium doloremque<br></br> 
                        laudantium, totam rem aperiam, eaque ipsa<br></br> 
                        quae ab illo inventore veritatis et quasi
                    </p>
                </Content>                    
            </Container>

             <Container>
                <Content>
                    <h1>Lorem ipsum dolor<br/> sit amen</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error<br></br>
                        sit voluptatem accusantium doloremque<br></br> 
                        laudantium, totam rem aperiam, eaque ipsa<br></br> 
                        quae ab illo inventore veritatis et quasi
                    </p>
                </Content>
                    <ContentImg>
                        <img src={cardasImage3} alt='card' />
                    </ContentImg>
            </Container>

            <Container>
                <ContentImg>
                        <img src={cardasImage4} alt='card' />
                </ContentImg>

                <Content>
                    <h1>Lorem ipsum dolor <br/>sit amen</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error<br></br>
                        sit voluptatem accusantium doloremque<br></br> 
                        laudantium, totam rem aperiam, eaque ipsa<br></br> 
                        quae ab illo inventore veritatis et quasi
                    </p>
                </Content>                    
            </Container>         
        </>
    )
}

export default CardsImagesTexts


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1065px) {
        width: 800px;
        flex-direction: column;
    }
`

const Content = styled.div`
    background: var(--bg);
    width: 600px;
    height: 484px;    
    justify-content: center;
    align-items: center;
    text-align: justify;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 40px;
        align-items: center;
        color: white;
    }

    p {
        font-size: 18px;
        align-items: center;
        color: #8794BA;
    }
`

const ContentImg = styled.div`
    background: #fff;
    width: 600px;
    height: 484px; 
  

    @media (max-width: 375px) {
        width: 300px;        
        gap: 20px;
        background: none;

        img {
            width:300px;
            height: 284px;
        }
    }
`

