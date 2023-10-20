import React from "react";
import '../css/main_css.css';
import VanCard from "./vanCard";
import './server';
import { useSearchParams, Link } from "react-router-dom";

export default function Van(){
    const [vans, setVans] = React.useState([]);
    const [searchParam,setSearchParm] = useSearchParams();
    const typefilter = searchParam.get('type');

    console.log(typefilter);

    React.useEffect(() => {
        fetch("/api/vans")
          .then((response) => response.json())
          .then((json) => setVans(json.vans))
      }, []);

      const container = typefilter ? (vans
      .filter((item) => item.type === typefilter)
      .map((item) =>{
        return <VanCard key={item.id} id={item.id} img ={item.imageUrl} title={item.name}  price={item.price} type={item.type} />
      })) : (vans.map((item) =>{
        return <VanCard key={item.id} id={item.id} img ={item.imageUrl} title={item.name}  price={item.price} type={item.type} />
      }))

      

    return (
        <div className="van">
            
            <div className="van_body">
                <h2>
                    Explore our van options
                </h2>
                <div className="choices">
                    <Link to='?type=simple' className="filter nav_link" style={{backgroundColor: typefilter === 'simple' ? '#E17654' : '', color: typefilter === 'simple' ? '#ffffff' : '#4D4D4D' }}>Simple</Link>
                    <Link to='?type=luxury' className="filter" style={{backgroundColor: typefilter === 'luxury' ? '#161616' : '', color: typefilter === 'luxury' ? '#ffffff' : '#4D4D4D'  }}>Luxury</Link>
                    <Link to='?type=rugged' className="filter" style={{backgroundColor: typefilter === 'rugged' ? '#115E59' : '', color: typefilter === 'rugged' ? '#ffffff' : '#4D4D4D'  }}>Rugged</Link>
                    {typefilter && <Link to='.' className="no_filter">Clear filters</Link>}
                </div>
                <div className="item_container">
                    {container}
                </div>
            </div>
        </div>
    );
}
