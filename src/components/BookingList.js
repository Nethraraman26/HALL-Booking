// frontend/src/components/BookingList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/bookings');
      setBookings(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map((booking, idx) => (
          <li key={idx}>
            <strong>{booking.name}</strong> booked <em>{booking.hall}</em> on <em>{booking.date}</em> during <em>{booking.timeSlot}</em> for <em>{booking.purpose}</em>.
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
