import {differenceInCalendarDays, format} from "date-fns";


export default function BookingDates({booking, className}) {
    return (
        <div className="">
            {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} nights

            <div className=''>
                {format (new Date(booking.checkIn), 'dd/MM/yyyy')}
            </div>
            &rarr;
            <div className=''>
                {format (new Date(booking.checkOut), 'dd/MM/yyyy')}
            </div>
        </div>
    )
}