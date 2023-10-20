import React from "react";
import '../css/main_css.css'
import './server'
import HostVanCard from "./hostvan_card";

export default function Hostvan(){

    const [listvan,setVans] = React.useState([]);
    
    React.useEffect(() =>{
        fetch("/api/host/vans")
          .then((response) => response.json())
          .then((json) => setVans(json.vans))
    },[])

    const list =listvan.map(van =>{
        return <HostVanCard img ={van.imageUrl} hostid={van.id}  title={van.name} price={van.price}/>
    })

    return (
        <div className="hostvan_main_div">
            <h1>Your listed vans</h1>
            <div className="hostvan_list_container">
                {
                    list
                }
            </div>
        </div>
    );
}
