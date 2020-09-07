import React from 'react';
import { render, screen } from '../customRender';
import App from '../../components/App';

describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    render(<App />);
    expect(screen.getByText(/Your snooker coach/i)).toBeInTheDocument();
  });
});