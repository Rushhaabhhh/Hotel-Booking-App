import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Image from "../../Components/Image"; 
import './IndexPage.css';



export default function IndexPage() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/places/getPlaces').then(response => {
            setPlaces(response.data);
        })
    }, []);

    return ( 
        <div className="index-page">
            {places.length > 0 && places.map(place => (
                <Link to={`/places/${place.id}`} key={place.id} className="place-link">
                    <div className="place-container">
                        {places.photos ?.[0] && (
                            <Image  className="place-image" src={places.photos?.[0]} alt={places.name} />
                        )}
                    </div>
                    <div className="place-details">
                    <h2 className="place-address">{place.address}</h2>
                    <h3 className="place-title">{place.title}</h3>
                    <div className="place-price">
                        <span>${place.price}</span> per night
                    </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}