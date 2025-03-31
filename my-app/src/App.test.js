// src/App.test.js
jest.mock('react-router-dom', () => ({
  MemoryRouter: ({ children }) => <div>{children}</div>,
}));

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component without crashing", () => {
  render(<App />);
  expect(screen.getByText(/Little Lemon/i)).toBeInTheDocument();
});
