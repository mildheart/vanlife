import React from "react";
import '../css/main_css.css'
import { Link, Outlet } from "react-router-dom";

export default function HostLayout(){
    return(
        <div className="hostLayout">
            <nav>   
                <Link to='' className="link">
                    DashBoard
                </Link>

                <Link to='income' className="link">
                    Income
                </Link>

                <Link to='vans' className="link">
                    Vans
                </Link>

                <Link to='reviews' className="link">
                    Reviews
                </Link>

            </nav>
            <Outlet />
        </div>
    );
}
