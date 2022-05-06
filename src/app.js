import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import UserContext from './userContext'

import Login from './login'
import SignUp from './signUp';

export default function App() {
    const [info, setInfo] = useState({})

    return(
        <UserContext.Provider value={{info, setInfo}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/signUp' element={<SignUp/>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}