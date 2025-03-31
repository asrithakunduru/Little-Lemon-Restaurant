import React, { useState, useEffect } from 'react';
import { submitAPI } from '../utils/api';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [bookingData, setBookingData] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
    setTime(''); // Reset time when date changes
  };

  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Please select a date.";
    if (!time) newErrors.time = "Please select a time.";
    if (!guests || guests < 1 || guests > 10) newErrors.guests = "Please enter between 1 and 10 guests.";
    if (!occasion) newErrors.occasion = "Please select an occasion.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const formData = { date, time, guests, occasion };
        const success = await submitAPI(formData);
        
        if (success) {
          setSuccessMessage('Reservation submitted successfully!');
          submitForm(formData);
          setBookingData([...bookingData, formData]);
          // Reset form after successful submission
          setTimeout(() => {
            setDate('');
            setTime('');
            setGuests(1);
            setOccasion('Birthday');
            setSuccessMessage('');
          }, 3000);
        }
      } catch (error) {
        setErrors({ submit: 'Failed to submit reservation. Please try again.' });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Clear success message after timeout
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <section className="booking-form-container">
      <h2>Make a Reservation</h2>
      <p className="form-instructions">Fill out the form below to reserve your table.</p>
      
      <form
        style={{ display: "grid", maxWidth: "400px", gap: "20px" }}
        onSubmit={handleSubmit}
        aria-label="Table reservation form"
        noValidate
      >
        <div className="form-group">
          <label htmlFor="res-date">Choose date*</label>
          <input
            type="date"
            id="res-date"
            required
            value={date}
            onChange={handleDateChange}
            aria-label="Select reservation date"
            aria-required="true"
            aria-invalid={!!errors.date}
            min={new Date().toISOString().split('T')[0]}
          />
          {errors.date && <span className="error-message" role="alert">{errors.date}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="res-time">Choose time*</label>
          <select
            id="res-time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            aria-label="Select reservation time"
            aria-required="true"
            aria-invalid={!!errors.time}
          >
            <option value="">Select a time</option>
            {availableTimes.map((timeOption) => (
              <option key={timeOption} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>
          {errors.time && <span className="error-message" role="alert">{errors.time}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of guests*</label>
          <input
            type="number"
            id="guests"
            min="1"
            max="10"
            required
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            aria-label="Enter number of guests"
            aria-required="true"
            aria-invalid={!!errors.guests}
          />
          {errors.guests && <span className="error-message" role="alert">{errors.guests}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="occasion">Occasion*</label>
          <select
            id="occasion"
            required
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            aria-label="Select occasion"
            aria-required="true"
            aria-invalid={!!errors.occasion}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </select>
          {errors.occasion && <span className="error-message" role="alert">{errors.occasion}</span>}
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting || !date || !time || guests < 1 || guests > 10 || !occasion}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Reservation'}
        </button>

        {errors.submit && <span className="error-message" role="alert">{errors.submit}</span>}
        {successMessage && <div className="success-message" role="status">{successMessage}</div>}
      </form>

      {/* Booking Table */}
      {bookingData.length > 0 && (
        <section className="booking-history">
          <h3>Your Reservations</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Guests</th>
                <th>Occasion</th>
              </tr>
            </thead>
            <tbody>
              {bookingData.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.date}</td>
                  <td>{booking.time}</td>
                  <td>{booking.guests}</td>
                  <td>{booking.occasion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </section>
  );
}

export default BookingForm;