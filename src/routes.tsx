import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from './style';
import Home from "./Pages/Home";

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Default />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}