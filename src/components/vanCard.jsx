import React from "react";
import '../css/main_css.css';
import { Link } from "react-router-dom";

export default function VanCard(prop){

    let background;

    if(prop.type === "simple")
        background = "#E17654";
    else if(prop.type === "luxury")
        background = "#161616";
    else
        background = "#115E59"        

    let my_style ={
            display:'flex',
            width: '140px',
            height: '45px',
            justifyContent: 'center',
            alignItems:'center',
            color: '#ffffff',
            backgroundColor: background,
            borderRadius: '8px',
            cursor:'pointer',
            marginTop: '15px'

            
           

    }

    return(
        <Link to={`/vans/${prop.id}`} className="van_link">
            <div className="vancard_div">

                <img src={prop.img} alt="van" className="vancard_img"/>
                <div className="vancard_detail">
                    <p className="van_title">{prop.title}</p>
                    <div className="van_price_detail">
                        <p className="van_price">${prop.price}</p>
                        <p  className="day">/day</p>
                    </div>
                    
                </div>
                <div style={my_style} >
                <p  >{prop.type}</p>
                </div>
            </div>
        </Link>
    );
}
