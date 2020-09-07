import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Select from '../../components/Select';

describe('<Select />', () => {
  it('Renders <Select /> component correctly', () => {
    const location = 'a';
    const handleChange = () => { return 1+1};
    const { getByText } = render(<BrowserRouter><Select location={location} handleChange={handleChange} /></BrowserRouter>);
    expect(getByText(/crucible/i)).toBeInTheDocument();
  });
});