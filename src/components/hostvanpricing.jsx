import React from "react";
import '../css/main_css.css';
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing(){

    const {currentvan} = useOutletContext();

    return (
        <div>
            <p className="hostvandetail_feature">$<span className='feature_title'>{currentvan.price}</span>                                                                     /day</p>
        </div>
    );
}
