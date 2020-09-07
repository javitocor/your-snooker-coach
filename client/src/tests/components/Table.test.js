import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Table from '../../components/Table';

describe('<Table />', () => {
  it('Renders <Table /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><Table /></BrowserRouter>);
    expect(getByText(/nationality/i)).toBeInTheDocument();
  });
});