/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, screen } from '../customRender';
import App from '../../components/App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    render(<App />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});
