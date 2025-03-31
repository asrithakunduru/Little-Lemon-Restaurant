// src/utils/temp.js

export const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00'];
  };
  
  export const updateTimes = (state, action) => {
    // Example reducer logic (modify as necessary)
    switch (action.type) {
      case 'BOOK_TIME':
        return state.filter(time => time !== action.payload);
      default:
        return state;
    }
  };
  