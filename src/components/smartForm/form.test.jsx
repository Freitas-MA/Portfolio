import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Form from './form';

jest.mock('emailjs-com', () => ({
  sendForm: jest.fn(() => Promise.resolve({ text: 'Email sent successfully' })),
}));

describe('Form', () => {
  it('should render the form with the correct fields', () => {
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Message')).toBeInTheDocument();
  });

  it('should submit the form with the correct data', async () => {
    const { getByLabelText, getByText } = render(<Form />);
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const messageInput = getByLabelText('Message');
    const submitButton = getByText('Send');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message' } });
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute('disabled');
    expect(submitButton).toHaveClass('sending');

    await waitFor(() => expect(submitButton).not.toHaveAttribute('disabled'));

    expect(submitButton).toHaveClass('success');
    expect(submitButton).toHaveTextContent('Message Sent!');
    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');

    // Check that emailjs.sendForm was called with the correct arguments
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      expect.any(HTMLFormElement),
      process.env.REACT_APP_EMAILJS_USER_ID
    );
  });

  it('should show an error message if the email fails to send', async () => {
    emailjs.sendForm.mockImplementationOnce(() => Promise.reject(new Error('Email failed to send')));

    const { getByLabelText, getByText } = render(<Form />);
    const nameInput = getByLabelText('Name');
    const emailInput = getByLabelText('Email');
    const messageInput = getByLabelText('Message');
    const submitButton = getByText('Send');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'johndoe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message' } });
    fireEvent.click(submitButton);

    expect(submitButton).toHaveAttribute('disabled');
    expect(submitButton).toHaveClass('sending');

    await waitFor(() => expect(submitButton).not.toHaveAttribute('disabled'));

    expect(submitButton).toHaveClass('error');
    expect(submitButton).toHaveTextContent('Error: Please try again later.');
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('johndoe@example.com');
    expect(messageInput).toHaveValue('Hello, this is a test message');

    // Check that emailjs.sendForm was called with the correct arguments
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      expect.any(HTMLFormElement),
      process.env.REACT_APP_EMAILJS_USER_ID
    );
  });
});