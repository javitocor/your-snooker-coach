import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import CoachCard from '../../components/CoachCard';

describe('<CoachCard />', () => {
  it('Renders <CoachCard /> component correctly', () => {
    const player = {name: 'Player'};
    const { getByText } = render(<BrowserRouter><CoachCard player={player}/></BrowserRouter>);
    expect(getByText(/Professional/i)).toBeInTheDocument();
  });
});