import React from "react";
import '../css/main_css.css';
import Home from './home'
import About from './about'
import Van from './van'
import VanDetail from './vandetail'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import HostLayout from "./hostLayout";
import Dashboard from "./dashboard_host";
import Income from "./income_host";
import Review from "./Reviews";
import Hostvan  from './hostvan';
import HostVanLayout from "./hostvanLayout";
import HostVanDetail from "./hostvan_detail";
import HostVanPricing from "./hostvanpricing";
import HostVanPhoto from "./hostvanphoto";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route  path="about" element={<About />} />
                    <Route path="vans" element={<Van />} />
                    <Route path="vans/:id" element={<VanDetail/>} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index  element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Review />} />
                        <Route path='vans' element={<Hostvan />} />

                        <Route path='vans/:id' element={<HostVanLayout />} >
                                <Route index element={<HostVanDetail />} />
                                <Route path="pricing" element={<HostVanPricing />} />
                                <Route path="photos" element={<HostVanPhoto />} />
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}
