import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import CoachCard from '../../components/CoachCard';

describe('<CoachCard />', () => {
  it('Renders <CoachCard /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><CoachCard /></BrowserRouter>);
    expect(getByText(/Professional/i)).toBeInTheDocument();
  });
});