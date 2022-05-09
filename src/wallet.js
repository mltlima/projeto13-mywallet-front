import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom';
import { useState, useContext, useEffect } from "react";

import api from "./api";
import UserContext from "./userContext";

export default function Wallet() {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const [wallet, setWallet] = useState({
        value: 0,
        ledger: []
    });

    useEffect(() => {
        api.getUser(user.token).then((response) => {
            console.log(response.data.ledger);
            if(response.data != 0){
                setWallet(response.data);
                console.log(user)
            }
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    //logout account
    function logout(){
        localStorage.removeItem('user');
        setUser({});
        navigate("/");
    }

    return(
        <MainDiv>
            <Header>
                <p>Olá, {user.username}</p>
                <ion-icon name="exit-outline" onClick={() => logout()}></ion-icon>   
            </Header>
            <WalletInfo wallet={wallet}>
                {!wallet.ledger[0] ? <p>Não há registros de entrada ou saída</p> :
                    wallet.ledger.map((item, index) => <Ledger key={index} item={item}/>)}
            </WalletInfo>
            <BalanceDiv value={wallet.value}>
                <h4>SALDO</h4>
                <p>{parseFloat(wallet.value).toFixed(2)}</p>
            </BalanceDiv>
            <InpOut>
                <Button onClick={() => navigate("/input")}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova entrada</p>
                </Button>
                <Button onClick={() => navigate("/output")}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova saída</p>
                </Button>
            </InpOut>
        </MainDiv>
    )
}

function Ledger(props){
    const {item} = props;

    return(
        <ValuesDiv>
            <InfoDiv>
                <h4>{item.date}</h4>
                <p>{item.description}</p>
            </InfoDiv>
            <ValueDiv type={item.type}>
                <p>{item.value}</p>
            </ValueDiv>
        </ValuesDiv>
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

const ValuesDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    color: #000000;
    margin-bottom: 15px;
`

const InfoDiv = styled.div`
    display: flex;
    
    h4{
        color: #C6C6C6;
    }

    p{
        color: #black;
        margin-left: 5px;
    }
`

const ValueDiv = styled.div`
    p {
        color: ${({ type }) => (type === "input" ? '#03AC00' : '#C70000')};
    }
`

const BalanceDiv = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;

    h4{
        font-weight: 700;
    }

    p {
        color: ${({ value }) => (parseFloat(value) > 0 ? '#03AC00' : '#C70000')};
    }
    font-size: 17px;
        
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

const WalletInfo = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    flex-direction: column;
    border-radius: 5px 5px 0px 0px;
    background-color: #ffffff;
    font-size: 20px;
    text-align: center;
    padding: 10px;
    justify-content: ${({ wallet }) => (!wallet.ledger[0] ? 'center' : 'flex-start')};
    align-items: center;
`

const InpOut = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 22px;
`

const Button = styled.div`
    width: 45%;
    height: 114px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 5px;
    font-size: 17px;
    justify-content: space-between;
    background-color: #A328D6;
    color: #ffffff;
`

