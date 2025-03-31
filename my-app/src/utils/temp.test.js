import { initializeTimes, updateTimes } from './temp';
import * as apiModule from './api'; // import the actual API module so we can mock its functions

describe('Booking API Reducer Functions', () => {
  const mockTimes = ['17:00', '18:00', '19:30'];

  beforeEach(() => {
    jest.spyOn(apiModule, 'fetchAPI').mockImplementation(() => mockTimes);
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Reset mocks after each test
  });

  test('initializeTimes returns available times from fetchAPI', () => {
    const times = initializeTimes();
    expect(times).toEqual(mockTimes);
    expect(apiModule.fetchAPI).toHaveBeenCalledTimes(1);
  });

  test('updateTimes returns new times based on dispatched date', () => {
    const action = {
      type: 'UPDATE_TIMES',
      payload: '2025-04-01',
    };
    const state = [];
    const result = updateTimes(state, action);

    expect(result).toEqual(mockTimes);
    expect(apiModule.fetchAPI).toHaveBeenCalledWith(new Date('2025-04-01'));
  });

  test('updateTimes returns original state for unknown action', () => {
    const action = { type: 'INVALID_TYPE' };
    const state = ['17:00'];
    const result = updateTimes(state, action);

    expect(result).toEqual(state);
    expect(apiModule.fetchAPI).not.toHaveBeenCalled();
  });
});
