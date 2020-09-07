import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import CarouselItem from '../../components/CarouselItem';

describe('<CarouselItem />', () => {
  it('Renders <CarouselItem /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><CarouselItem /></BrowserRouter>);
    expect(getByText(/Profesional Since/i)).toBeInTheDocument();
  });
});