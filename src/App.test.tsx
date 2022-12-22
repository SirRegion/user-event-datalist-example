import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";


test('test datalist', async () => {
  userEvent.setup();
  render(<App />);
  const datalist = screen.getByLabelText("Choose your browser from the list:");
  expect(datalist).toBeInTheDocument();
  await userEvent.selectOptions(datalist,"Edge")
  expect(datalist).toHaveValue("Edge")
});
