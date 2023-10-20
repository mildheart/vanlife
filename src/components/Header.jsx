import React from "react";
import '../css/main_css.css';
import { Link } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <h1>
                <Link to='/' className="main_title_link">
                   #VANLIFE
                </Link>
                
            </h1>
            <ul>
            <li>
                    <Link to='host' className="link">
                        Host
                    </Link>
                </li>
                <li>
                    <Link to='about' className="link">
                        About
                    </Link>
                </li>
                <li>
                    <Link to='vans' className="link">
                        Vans
                    </Link>
                </li>
            </ul>
        
        </div>
    );
}
