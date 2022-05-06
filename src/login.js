import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import UserContext from "./userContext";

export { LoginContainer, InputForm }

export default function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);

    //submit form to api
    function submitLogin(event){
        event.preventDefault();

        const promise = axios.post("localhost:5000/api/login", (userData));
        promise.then(response => {

        }).catch(error => {

        })
    }

    return (
        <LoginContainer>
            <h1>MyWallet</h1>
            <InputForm onSubmit={submitLogin}>
                <input type="email" placeholder="E-mail" onChange={(e) => setUserData({...userData, email: e.target.value})} disabled={loading} required/>
                <input type="password" placeholder="Senha" onChange={(e) => setUserData({...userData, password: e.target.value})} disabled={loading} required/>
                <button type="submit"><p>Entrar</p></button>
            </InputForm>
            <Link to="/signUp"><h2>Primeira vez? Cadastre-se!</h2></Link>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        margin-bottom: 24px;
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        color: #FFFFFF;
    }
    h2 {
        margin-top: 36px;
        color: #FFFFFF;
    }
`

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    input {
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        outline: none;
        padding: 10px;
        font-size: 20px;
        height: 45px;
        margin-bottom: 6px;
    }
    input::placeholder{
        color: #000000;
    }
    button {
        height: 45px;
        background-color: #A328D6;
        font-size: 20px;
        border-radius: 5px;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFFFFF;
    }
`