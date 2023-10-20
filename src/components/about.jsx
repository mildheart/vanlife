import React from "react";
import '../css/main_css.css';

export default function About(){
    return (
        <div className="about">
        
            <div className="about_body">
                <div className="img_div"></div>
                <div className="about_content">
                    <h1>
                    Don’t squeeze in a sedan when you could relax in a van.
                    </h1>
                    <p>
                        
                        Our mission is to enliven your road trip with the perfect travel
                        van rental. Our vans are recertified before each trip to ensure
                        your travel plans can go off without a hitch.
                        (Hitch costs extra 😉) </p>
                    <p>
                        Our team is full of vanlife enthusiasts who know firsthand the
                        magic of touring the world on 4 wheels. 
                    </p>
                    <div className="explore_van_container">
                        <p>
                        Your destination is waiting. Your van is ready.
                        </p>
                        <button>explore our vans</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
