import React from "react";
import '../css/main_css.css';
import { useOutletContext } from "react-router-dom";

export default function HostVanPhoto(){

    const {currentvan} = useOutletContext();

    return (
        <div>
            <img src={currentvan.imageUrl} alt={currentvan.name} className="hostvancard_img"/>
        </div>
    );
}
