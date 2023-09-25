import React from "react";
import '../css/main_css.css';
import { Link,Outlet } from "react-router-dom";

export default function Header(){
    return (
        <div className="header">
            <h1>
                #VANLIFE
            </h1>
            <ul>
                <li>
                    <Link to='/about' className="link">
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/van' className="link">
                        Vans
                    </Link>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}
