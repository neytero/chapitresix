import React from 'react';
import './bookingbutton.css';

const BookingButton = ({ className }) => {
  return (
    <button className={`reserve-button ${className}`}>
      Réserver
    </button>
  );
};

export default BookingButton;
