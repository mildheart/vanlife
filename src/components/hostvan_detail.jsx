import React from "react";
import '../css/main_css.css';
import { useOutletContext } from "react-router-dom";

export default function HostVanDetail(){
    const {currentvan} = useOutletContext();
    console.log(currentvan); 
    return (
    <div>
        <p className="hostvandetail_feature"><span className='feature_title'>Name: </span> {currentvan.name}</p>
        <p className="hostvandetail_feature"><span className='feature_title'>Category: </span>{currentvan.type}</p>
        <p className="hostvandetail_feature"><span className='feature_title'>Description: </span>{currentvan.description}</p>
        <p className="hostvandetail_feature"><span className='feature_title'>Visibility: </span>public</p>
    </div>
    );
}
