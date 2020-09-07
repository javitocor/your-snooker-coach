import React from 'react';
import { render, screen } from '../customRender';
import App from '../../components/App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<App />', () => {
  it('Renders <App /> component correctly', () => {
    render(<App />);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });
});