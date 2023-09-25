import React from "react";
import '../css/main_css.css';
import Header from './Header';
import Footer from './Footer';

export default function Home(){
    return (
        <div className="home">
            <Header />
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
            <Footer />
        </div>
    );
}
