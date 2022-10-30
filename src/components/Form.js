import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import backgroundImage from '../images/BgClient.png'
import Footer from './Footer'

import ReCAPTCHA from 'react-google-recaptcha'; 
const key ="6LdYNcciAAAAAM9giwPuCRCWYY8ghDmgJ-cHAxwx"

function onChange(e) {
    alert(e);
    console.log(e);
  }

function Form() {
    const { register, handleSubmit, formState: {errors} } = useForm()
    const addPost = data => console.log(data)

    return (
        <Container style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h1>Sed ut perspiciatis unde<br></br>
                omnis iste natus error
            </h1>

            <Formulario onSubmit={handleSubmit(addPost)}>
                <input 
                className='email'
                type='email' 
                placeholder="Seu melhor e-mail" 
                {...register('email', {required: 'Campo obrigatório!'})}
                />
                <span>{errors.email?.message}</span>

                <Content>
                    <input 
                        class="name" 
                        type="text" 
                        placeholder="Nome"
                        {...register('name', {required: 'Campo obrighatório!', minLength: {
                            value: 4,
                            message: 'Minímo 4 caracteres'
                        } })}
                    />
                    <input 
                        class="empresa" 
                        type="text" 
                        placeholder="Empresa"
                        {...register('empresa', {required: 'Campo obrighatório!'})}
                    />                    
                </Content>

                <Spans>
                    <span>{errors.name?.message}</span>
                    <span>{errors.empresa?.message}</span>                  
                </Spans>

                <input 
                    className='assunto' 
                    type='text' 
                    placeholder="Assunto" 
                    {...register('assunto', {required: 'Campo obrighatório!'})}
                />
                <span>{errors.assunto?.message}</span>
                <textarea 
                    className='area'
                    {...register('area', {required: 'Campo obrighatório!'})}
                />
                <span>{errors.area?.message}</span>
                

                <Botoes>
                <ReCAPTCHA
                    className='captcha'
                    sitekey={key}                    
                    theme='dark'
                    onChange={onChange}
                />
                    <button class="botao" type="submit">Entre em contato</button>
                </Botoes>
            </Formulario>
            <Footer />
        </Container>
    )
}

export default Form

const Container = styled.div`
    width: 100%;
    margin-top: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 1065px) {
        width: 800px;
        flex-direction: column;
        text-align: center;
        gap: 5rem;
    }
    
    h1 {
    font-size: 40px;
    margin-top: 334px;
    color: #0f123f; 
    }
`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 36px;
    margin: auto;
    width: 100%;

    @media (max-width: 1065px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    p{
        color: #000;
        font-size: 30px;
    }

    input::placeholder {
        color: #0f123f;
        background-color: #F7F7F7;
        padding: 20px;
    }

    span {
        color: red;
    }

    .email{
    width: 704px;
    height: 52px;
    background: #F7F7F7;
    border-radius: 15px;
    margin-top: 18px;
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: solid 1px #fff;

    @media (max-width: 1065px){   
        width: 354px;
        text-align: center;
        overflow: hidden;
}

    }
    

    .assunto {
    width: 704px;
    height: 52px;
    background: #F7F7F7;
    border-radius: 15px;
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: solid 1px #fff;

        @media (max-width: 1065px){   
        width: 354px;
        text-align: center;
        overflow: hidden;
}
    }

    .area {
    width: 704px;
    height: 188px;
    background: #F7F7F7;
    border-radius: 15px;
    margin-top: 18px;
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: solid 1px #fff;

    @media (max-width: 1065px){   
        width: 354px;
        text-align: center;
        overflow: hidden;
        margin-bottom: 10px;
}
    }
`

const Spans = styled.div`
    display: flex;

    span {
        padding: 10px;
    }
`

const Content = styled.form`    
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
    gap: 15px;
    @media (max-width: 1065px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .name {
    width: 340px;
    height: 52px;
    background: #F7F7F7;
    border-radius: 15px;

    padding: 10px;
    font-size: 20px;
    outline: none;
    border: solid 1px #fff;

    
    @media (max-width: 1065px) {
        
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        text-align: center;
        
    }

    }

    .empresa {
    width: 340px;
    height: 52px;
    background: #F7F7F7;
    border-radius: 15px;

    padding: 10px;
    font-size: 20px;
    outline: none;
    border: solid 1px #fff;

    
    @media (max-width: 1065px) {
        
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        text-align: center;
        
    }

    }
`

const Botoes = styled.div`
    width: 100%;
    margin: 18px 0;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;

    @media (max-width: 1065px){
        width: 100%;
        flex-direction: column;
        text-align: center;
 
        justity-content: center;
        display: flex;
        margin-top: -20px;
    }

    .botao {
    width: 281.37px;
    height: 59px;
    background-color: #0DE67B;
    border-radius: 15px;
    text-align: center;
    color: white;  
    border: none;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 40px;

    &:hover {
        background-color: #fff;
        color: black;
        border: solid 1px black;  
    }
    }

    .captcha {
    width: 281.37px;
    height: 59px;
    margin-right:  50px;
   
    }
`