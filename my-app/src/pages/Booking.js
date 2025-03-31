import { useReducer } from "react";
import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
import Footer from "../components/Footer";
import { updateTimes, initializeTimes } from "../utils/temp";

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleSubmit = () => {
    // Add navigation logic here if needed
  };

  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default BookingPage;
