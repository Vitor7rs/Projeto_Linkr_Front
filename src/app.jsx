//React
import { BrowserRouter, Routes, Route } from "react-router-dom";
//context

//pages

export default function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/sign-up" element={<></>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}