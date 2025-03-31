import React from 'react';

function BookingForm({ availableTimes, dispatch, onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(); 
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Date: <input type="date" required /></label>
      <label>Time:
        <select required>
          {availableTimes.map(time => <option key={time}>{time}</option>)}
        </select>
      </label>
      <label>Guests: <input type="number" min="1" max="10" required /></label>
      <label>Occasion:
        <select required>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </label>
      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
