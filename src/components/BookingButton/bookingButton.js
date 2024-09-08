import React from 'react';
import './bookingbutton.css';

const BookingButton = ({ className }) => {
  return (
    
    <button className={`reserve-button ${className}`}>
      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L8 11L11.5 6L15 1" stroke="#FEFAF1"/>
      </svg>
      Réserver
    </button>
  );
};

export default BookingButton;
