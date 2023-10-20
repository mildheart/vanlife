import React from "react";
import '../css/main_css.css';
import { useParams } from "react-router-dom";
import './server';

import { Link } from "react-router-dom";

export default function VanDetail(){
    const van_id = useParams();
    const [van, setVan] = React.useState([]);

    React.useEffect(() =>{
        fetch(`/api/vans/${van_id.id}`)
          .then((response) => response.json())
          .then((json) => setVan(json.vans))
    },[van_id.id])

    let background;

    if(van.type === "simple")
        background = "#E17654";
    else if(van.type === "luxury")
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
            marginTop: '30px',
            marginBottom: '20px'         

    }

    return (
        <div className="van_contaier">
        
            <div className="vandetail_div">
                <Link to='/vans' className="van_link">
                <div className="backarrow_div">
                    <p className="arrow_symbol">&larr;</p>
                    <p className="arrow_text">Back to all vans</p>
                </div>
                </Link>
                <img src={van.imageUrl} alt="Van detail"  className="van_detail_img"/>
                <div style={my_style} >
                    <p  >{van.type}</p>
                    </div>
                <p className="van_title">{van.name}</p>
                <p className="van_detail_price"><span>${van.price}</span> /day</p>
                <p className="van_detail_content">{van.description}</p>
                <button>Rent this van</button>
            </div>
       </div> 
    );
}
