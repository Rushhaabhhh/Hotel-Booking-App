import React, {useState,useContext} from 'react';
import {UserContext} from '../UserContext';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { differenceInCalendarDays } from 'date-fns';

export default function BookingWidget({place}) {
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [numberOfGuests,setNumberOfGuests] = useState(1);
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [redirect,setRedirect] = useState('');
    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user) {
          setName(user.name);
        }
        }, [user]);
        
        let numberOfNights = 0;
        if (checkIn && checkOut) {
            numberOfNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
        }
        
        async function bookThisPlace() {
            const response = await axios.post('http://localhost:5000/bookings/addBooking', {
            checkIn,checkOut,numberOfGuests,name,phone,
            place:place._id,
            price:numberOfNights * place.price,
            });
            const bookingId = response.data._id;
            setRedirect(`/account/bookings/${bookingId}`);
        }
        
        if (redirect) {
            return <Navigate to={redirect} />
        }
    return (
        <div>
            <div>
                Price : ${place.price} / night 
            </div>
            <div>
                <div>
                    <div>
                        <label>Check In</label>
                        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                    </div>
                    <div>
                        <label>Check Out</label>
                        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                    </div>
                </div>
                    <div>
                        <label>Number of Guests</label>
                        <input type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} />
                    </div>
                    {numberOfNights > 0 && (   
                        <div>
                            <label>Name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                   
                            <label>Phone</label>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        )}
                    </div>
        
            <button onClick={bookThisPlace}>Book this place {
                numberOfNights > 0 && (
                    <span>for ${numberOfNights * place.price}</span>
                )}
            </button>
        </div>
    )    
}