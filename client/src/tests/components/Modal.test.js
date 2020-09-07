import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Modal from '../../components/Modal';

describe('<Modal />', () => {
  it('Renders <Modal /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><Modal /></BrowserRouter>);
    expect(getByText(/select location and date/i)).toBeInTheDocument();
  });
});