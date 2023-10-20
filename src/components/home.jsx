import React from "react";
import '../css/main_css.css';


export default function Home(){
    return (
        <div className="home">
            <div className="home_body">
                <div className="content">
                    <h1>
                        You got the travel plans, we got the travel vans.
                    </h1>
                    <p>
                      Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                    </p>
                    <button>Find your van</button>
                </div>
            </div>
        </div>
    );
}
