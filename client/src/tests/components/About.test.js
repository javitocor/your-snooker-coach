import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import About from '../../components/About';

describe('<About />', () => {
  it('Renders <About /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><About /></BrowserRouter>);
    expect(getByText(/xin chào/i)).toBeInTheDocument();
  });
});
