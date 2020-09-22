import React from 'react';
import PropTypes from 'prop-types';
import { locations } from '../helpers/constants';

const dropMenu = locations.map(
  location => <option key={location} value={location}>{location}</option>,
);

const Select = ({ handleChange, location }) => (
  <select name="location" value={location} onChange={event => handleChange(event)} className="custom-select" id="example-select">
    {dropMenu}
  </select>
);

Select.propTypes = {
  location: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
