import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import NotFound from './pages/NotFound';
import { initializeTimes, updateTimes, submitAPI } from './utils/temp';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  // ✅ Step 3: Handle form submission
  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    } else {
      alert("Failed to reserve table. Please try again.");
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={
        <Booking availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      } />
      <Route path="/confirmed" element={<Confirmation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
