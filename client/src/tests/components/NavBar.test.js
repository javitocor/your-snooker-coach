import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../../components/NavBar';

describe('<NavBar />', () => {
  it('Renders <NavBar /> component correctly', () => {
    const { getByText } = render(<NavBar />);
    expect(getByText(/your snooker coach/i)).toBeInTheDocument();
  });
});