import React  from "react";
import '../css/main_css.css'

export default function Dashboard(){
    return (
        <div className="dashboard_main_container">
            <p className="dashboard_title">Welcome!</p>
            <div>
                <p>income last <span>30 days</span></p>
                <p>Details</p>
            </div>
            <p className="dashboard_total_cost">$2,260</p>
            <div className="review_score_container">
                
            </div>
        </div>
    );
}
