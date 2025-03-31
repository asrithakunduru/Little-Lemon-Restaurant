import { fetchAPI, submitAPI } from './api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.payload));
    default:
      return state;
  }
};

export { submitAPI };
