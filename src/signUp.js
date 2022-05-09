import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

import { LoginContainer, InputForm } from "./login";
import api from "./api";

export default function SignUp(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [confirmPassword, setConfirmPassword] = useState("");

    function registerUser(event){
        event.preventDefault();

        if(parseInt(userData.password) === parseInt(confirmPassword)){
            api.signUp(userData).then((e) => {
                console.log(e)
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
            }).catch((error) => {
                console.log(error);
                alert(error.message);
            })
        }else {
            alert("Senhas não conferem");
        }
    }

    return (
        <LoginContainer>
            <h1>MyWallet</h1>
            <InputForm onSubmit={registerUser}>
                <input type="text" placeholder="Nome" onChange={(e) => setUserData({...userData, username: e.target.value})} required disabled={loading}/>
                <input type="email" placeholder="E-mail" onChange={(e) => setUserData({...userData, email: e.target.value})} required disabled={loading}/>
                <input type="password" placeholder="Senha" onChange={(e) => setUserData({...userData, password: e.target.value})} required disabled={loading}/>
                <input type="password" placeholder="Confirme a senha" onChange={(e) => setConfirmPassword(e.target.value)} required disabled={loading}/>
                <button type="submit"><p>Cadastrar</p></button>
            </InputForm>
            <h2 onClick={() =>  navigate("/")}>Já tem uma conta? Entre agora!</h2>
        </LoginContainer>
    )
}