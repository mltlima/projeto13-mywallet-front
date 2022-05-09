import axios from 'axios';

const URL = 'http://localhost:5000/';

function config(token){
    return { headers: { authorization : `Bearer ${token}` }}
}

function login(user) {
    return axios.post(`${URL}login`, (user));
}

function signUp(user) {
    return axios.post(`${URL}signup`, (user));
}

function getUser(token){
    return axios.get(`${URL}wallet`, config(token));
}

function balance(token) {
    return axios.post(`${URL}balance`, config(token));
}

function postLedger(money, token) {
    return axios.post(`${URL}ledger`, money, config(token));
}

const api = {
    login, signUp, balance, postLedger, getUser
}

export default api;