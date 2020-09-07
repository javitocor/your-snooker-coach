import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Select from '../../components/Select';

describe('<Select />', () => {
  it('Renders <Select /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><Select /></BrowserRouter>);
    expect(getByText(/crucible/i)).toBeInTheDocument();
  });
});