import AddressLink from "../../Components/AddressLink";
import BookingDates from "../../Components/BookingDates";
import PlaceGallery from "../../Components/PlaceGallery";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


export default function BookingPage() {
    const {id} = useParams();
    const [booking,setBooking] = useState(null);
    useEffect(() => {
      if (id) {
        axios.get('http://localhost:5000/bookings/getBooking/' + id).then(response => {
          const foundBooking = response.data.find(({_id}) => _id === id);
          if (foundBooking) {
            setBooking(foundBooking);
          }
        });
      }
    }, [id]);
  
    if (!booking) {
      return '';
    }

    return (
        <div>
            <h1>{booking.place.title}</h1>
            <AddressLink>{booking.place.address}</AddressLink>
            <div> 
                <div>
                    <h2>Your booking details :</h2>
                    <BookingDates booking={booking} />
                </div>
                <div>
                    <div>Total Prices</div>
                    <div>${booking.place.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place} />
        </div>
    )
}