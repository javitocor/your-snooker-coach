import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';

describe('<NavBar />', () => {
  it('Renders <NavBar /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><NavBar /></BrowserRouter>);
    expect(getByText(/Profile/i)).toBeInTheDocument();
  });
});