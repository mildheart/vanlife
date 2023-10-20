import React from "react";
import '../css/main_css.css'
import { useParams, Link, Outlet } from "react-router-dom";

export default function HostVanLayout(){
    const hostid = useParams().id;
    const [vandetail, setDetail] = React.useState([]);

    React.useEffect(() =>{
        fetch(`/api/vans/${hostid}`)
        .then((response) => response.json())
        .then((json) => setDetail(json.vans))
  
    }, [hostid])

    let background;

    if(vandetail.type === "simple")
        background = "#E17654";
    else if(vandetail.type === "luxury")
        background = "#161616";
    else
        background = "#115E59"        

    let my_style ={
            display:'flex',
            width: '80px',
            height: '35px',
            justifyContent: 'center',
            alignItems:'center',
            color: '#ffffff',
            backgroundColor: background,
            borderRadius: '5px',
            marginTop: '20px',
            fontSize: '15px'

            
           

    }

    return (
        <div className="hostvanLayout">
            <Link to='..' relative="path" className="van_link">
                <div className="backarrow_div">
                    <p className="arrow_symbol">&larr;</p>
                    <p className="arrow_text">Back to all vans</p>
                </div>
            </Link>
            <div className="hostvanLayout_main">
                <div className="hostvanLayout_sub">
                    <div className="hostvanLayout_card">
                        <img src={vandetail.imageUrl} alt="host van" className="hostlayout_img" />
                        <div>
                            <div style={my_style} >
                                <p>{vandetail.type}</p>
                            </div>
                            <p className="hostlayout_title">{vandetail.name}</p>
                            <p className="hostvan_card_price">${vandetail.price}/day</p>
                        </div>
                    </div>
                    <nav>
                        <Link className="nav_link" to='' >
                            Details
                        </Link>
                        <Link className="nav_link" to='pricing'>
                            Pricing
                        </Link>
                        <Link className="nav_link" to='photos'>
                            Photos
                        </Link>
                   </nav>
                   <Outlet context={{currentvan: vandetail}} />
                </div>
                
            </div>
        </div>
    );

}
