import React from 'react';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

function Booking({ availableTimes, dispatch, submitForm }) {
  return (
    <>
      <Header />
      <main>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      </main>
      <Footer />
    </>
  );
}

export default Booking;
