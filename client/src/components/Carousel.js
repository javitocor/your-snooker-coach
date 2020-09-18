import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from './CarouselItem';
import '../style/Carousel.css';

const Carousel1 = props => {
  const { playerslist } = props;
  return (
    <Carousel id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel" interval={5000} controls={false}>
      {playerslist.map((player, index) => (
        <Carousel.Item key={index + 100}>
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
