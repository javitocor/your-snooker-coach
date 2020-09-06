import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from './CarouselItem';
import '../style/Carousel.css';

const Carousel1 = props => {
  const { playerslist } = props;
  return (
    <Carousel id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" interval={2000} >
      {playerslist.map((player, index) => (
        <Carousel.Item>
          <CarouselItem index={index} player={player} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
};

Carousel1.propTypes = {
  playerslist: PropTypes.arrayOf(PropTypes.object),
};

export default Carousel1;