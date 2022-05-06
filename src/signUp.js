import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import { LoginContainer, InputForm } from "./login";

export default function SignUp(){
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        image: '',
        password: '',
    });

    function registerUser(event){
        event.preventDefault();


    }

    return (
        <LoginContainer>
            <h1>MyWallet</h1>
            <InputForm onSubmit={registerUser}>
                <input type="text" placeholder="Nome" onChange={(e) => setUserData({...userData, name: e.target.value})} required disabled={loading}/>
                <input type="email" placeholder="E-mail" onChange={(e) => setUserData({...userData, email: e.target.value})} required disabled={loading}/>
                <input type="password" placeholder="Senha" onChange={(e) => setUserData({...userData, password: e.target.value})} required disabled={loading}/>
                <input type="password" placeholder="Confirme a senha" onChange={(e) => setUserData({...userData, password: e.target.value})} required disabled={loading}/>
                <button type="submit"><p>Cadastrar</p></button>
            </InputForm>
            <Link to="/"><h2>Já tem uma conta? Entre agora!</h2></Link>
        </LoginContainer>
    )
}