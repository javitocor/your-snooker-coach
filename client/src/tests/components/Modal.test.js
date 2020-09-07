import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import Modal from '../../components/Modal';

describe('<Modal />', () => {
  it('Renders <Modal /> component correctly', () => {
    const player = {name: 'player'};
    const addTraining = (a) => {return a+0};
    const { getByText } = render(<BrowserRouter><Modal player={player} addTraining={addTraining} /></BrowserRouter>);
    expect(getByText(/select location and date/i)).toBeInTheDocument();
  });
});