import {Link, useParams} from "react-router-dom";
import Account from "../../Components/Account";
import {useEffect, useState} from "react";
import axios from "axios";
import PlaceImage from "../../Components/PlaceImage";

export default function PlacesPage() {
    const [places,setPlaces] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/places/getPlaces').then(({data}) => {
        setPlaces(data);
      });
    }, []);

    return (
        <div>
            <Account />
            <div> 
                <Link to="/account/places/new">
                <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"></path>
                </svg>Add a new place</Link>
            </div>
            <div>
                {places.length > 0 && places.map(place => (
                    <Link to={`/account/places/${place.id}`}>
                        <div>
                            <PlaceImage place={place} />
                        </div>
                        <div>
                            <h2>{place.title}</h2>
                            <p>{place.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}