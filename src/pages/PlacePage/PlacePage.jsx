import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceGallery from "../../Components/PlaceGallery";
import AddressLink from "../../Components/AddressLink";
import BookingWidget from "../../Components/BookingWidget";


export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`http://localhost:5000/places/getPlaces/${id}`).then(response => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return '';

  return (
    <div className="container">
      <h1 className="heading">{place.title}</h1>
      <AddressLink className="address-link">{place.address}</AddressLink>
      <PlaceGallery place={place} />
      <div >
        <div>
          <div className="description-section">
            <h2 className="description-heading">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}<br />
          Check-out: {place.checkOut}<br />
          Max number of guests: {place.maxGuests}
        </div>
        <div>
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="extra-info-section">
        <div>
          <h2 className="extra-info-heading">Extra info</h2>
        </div>
        <div className="text-muted leading-5">{place.extraInfo}</div>
      </div>
    </div>
  );
}
