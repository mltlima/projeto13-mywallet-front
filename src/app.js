import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import UserContext from './userContext'

import Login from './login'
import SignUp from './signUp';
import Wallet from './wallet';
import Input from './input';
import Output from './output';

export default function App() {
    const [user, setUser] = useState({});

    return(
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/signUp' element={<SignUp/>}></Route>
                    <Route path='/wallet' element={<Wallet/>}></Route>
                    <Route path='/input' element={<Input/>}></Route>
                    <Route path='/output' element={<Output/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}