//React
import { BrowserRouter, Routes, Route } from "react-router-dom";
//context

//pages
import SignUp from "./pages/signUp";

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/sign-up" element={<SignUp/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}