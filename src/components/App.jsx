import React from "react";
import '../css/main_css.css';
import Home from './home'
import About from './about'
import { BrowserRouter,Routes,Route } from "react-router-dom";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/about" element={<About />} />
            
            </Routes>
        </BrowserRouter>
    );
}
