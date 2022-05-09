import styled from 'styled-components';
import { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import api from "./api";
import UserContext from "./userContext";
import { LoginContainer, InputForm } from "./login";

export default function Output() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [input, setInput] = useState({
        value: 0,
        description: '',
        type: "output"
    })

    function handleInput(event) {
        event.preventDefault();
        
        api.postLedger(input, user.token).then((response) => {
            console.log(response);
            navigate("/wallet");
        }).catch((error) => {
            console.log(error);
            alert(error.message);
        })
    }

    return(
        <MainDiv>
            <Header>
                <p>Nova saída</p>
            </Header>
            <InputForm onSubmit={handleInput}>
                <input type="number" step="0.01" placeholder="Valor" onChange={(e) => setInput({...input, value: e.target.value})} required/>
                <input type="text" placeholder="Descrição" onChange={(e) => setInput({...input, description: e.target.value})} required/>
                <button type="submit"><p>Salvar saída</p></button>
            </InputForm>
        </MainDiv>
    )
}

const MainDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Header = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;

    p, ion-icon{
        font-size: 26px;
        color: #ffffff;
    }
`