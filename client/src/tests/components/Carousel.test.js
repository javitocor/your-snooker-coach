import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Carousel1 from '../../components/Carousel';

describe('<Carousel1 />', () => {
  it('Renders <Carousel1 /> component correctly', () => {
    const playersList = ['a', 'b']
    const { getAllByText } = render(<BrowserRouter><Carousel1 playerslist={playersList} key={playersList} /></BrowserRouter>);
    expect(getAllByText(/Profesional Since/i)[0]).toBeInTheDocument();
  });
});