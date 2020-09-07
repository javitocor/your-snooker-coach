import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Carousel1 from '../../components/Carousel';

describe('<Carousel1 />', () => {
  it('Renders <Carousel1 /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><Carousel1 /></BrowserRouter>);
    expect(getByText(/Profesional Since/i)).toBeInTheDocument();
  });
});