import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Account from '../../Components/Account';
import PlaceImage from '../../Components/PlaceImage';
import BookingDates from '../../Components/BookingDates';
import './BookingsPage.css';


export default function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/bookings/getBookings').then(response => {
        setBookings(response.data);
      });
    }, []);
    return (
      <div>
        <Account />
        <div>
          {bookings?.length > 0 && bookings.map(booking => (
            <Link to={`/account/bookings/${booking._id}`} className="booking-link">
              <div className="place-img-wrapper">
                <PlaceImage place={booking.place} />
              </div>
              <div className="booking-details">
                <h2 className="place-title">{booking.place.title}</h2>
                <div className="booking-info">
                  <BookingDates booking={booking} className="booking-dates" />
                  <div className="total-price-container">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="price-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                    </svg>
                    <span className="total-price">
                      Total price: ${booking.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }