import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Table from '../../components/Table';

describe('<Table />', () => {
  it('Renders <Table /> component correctly', () => {
    const player = { name: 'a', nationality: 'a', born: 'a' };
    const { getByText } = render(
      <BrowserRouter>
        <Table key={player} player={player} />
      </BrowserRouter>,
    );
    expect(getByText(/nationality/i)).toBeInTheDocument();
  });
});
