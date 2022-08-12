//React
import { BrowserRouter, Routes, Route } from "react-router-dom";
//context
import UserContext from "./contexts/userContext";
//pages
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import { useState } from "react";

export default function App() {

    const persistedAuth = JSON.parse(localStorage.getItem("user"));
    //states (token dentro de user, junto com alguns dados uteis)
    const [user, setUser] = useState(persistedAuth);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>} />
                    <Route path="/sign-up" element={<SignUp/>} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}