import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockAvailableTimes = ['17:00', '18:30'];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn(() => Promise.resolve(true));

describe('BookingForm Component', () => {
  beforeEach(() => {
    render(
      <BookingForm
        availableTimes={mockAvailableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  test("Renders the 'Choose date' label", () => {
    const labelElement = screen.getByText(/choose date/i);
    expect(labelElement).toBeInTheDocument();
  });

  test('Date input has required attribute', () => {
    const input = screen.getByLabelText(/choose date/i);
    expect(input).toBeRequired();
  });

  test('Time select has required attribute', () => {
    const input = screen.getByLabelText(/choose time/i);
    expect(input).toBeRequired();
  });

  test('Guests input has min and max attributes', () => {
    const input = screen.getByLabelText(/number of guests/i);
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '10');
    expect(input).toBeRequired();
  });

  test('Occasion select has required attribute', () => {
    const input = screen.getByLabelText(/occasion/i);
    expect(input).toBeRequired();
  });

  test('Submit is blocked if required fields are empty', () => {
    const submitButton = screen.getByRole('button', { name: /submit reservation/i });
    fireEvent.click(submitButton);
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test('Form submits correctly with valid input', async () => {
    await act(async () => {
      fireEvent.change(screen.getByLabelText(/choose date/i), {
        target: { value: '2025-04-01' },
      });
      fireEvent.change(screen.getByLabelText(/choose time/i), {
        target: { value: '18:30' },
      });
      fireEvent.change(screen.getByLabelText(/number of guests/i), {
        target: { value: '4' },
      });
      fireEvent.change(screen.getByLabelText(/occasion/i), {
        target: { value: 'Birthday' },
      });

      fireEvent.click(screen.getByRole('button', { name: /submit reservation/i }));
    });

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2025-04-01',
      time: '18:30',
      guests: '4',
      occasion: 'Birthday',
    });
  });
});