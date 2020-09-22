import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Donut from '../../components/Donut';

describe('<Donut />', () => {
  it('Renders <Donut /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><Donut /></BrowserRouter>);
    expect(getByText(/specs/i)).toBeInTheDocument();
  });
});
