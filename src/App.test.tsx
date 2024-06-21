  import React from 'react'
  import './matchMedia.mock'; // Must be imported before the tested file
  import { render, screen } from '@testing-library/react';
  import App from './App';
  //import {myMethod} from './file-to-test';
  test('renders portfolio text', () => {
    render(<App />);
    const text = screen.getByText('This is portfolio');
    expect(text).toBeInTheDocument();
  });
