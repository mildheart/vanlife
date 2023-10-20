import React from "react";
import '../css/main_css.css'
import { Link } from "react-router-dom";

export default function HostVanCard(prop){
    return (
        <Link to={`/host/vans/${prop.hostid}`} className="van_link">
            <div className="hostvan_card">
                <img src={prop.img} alt="host van" className="hostvancard_img" />
                <div>
                    <p className="hostvan_card_title">{prop.title}</p>
                    <p className="hostvan_card_price">${prop.price}/day</p>
                </div>
            </div>
        </Link>
    );
}
