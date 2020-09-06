import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CarouselItem from './CarouselItem';
import '../style/Carousel.css';

const Carousel = props => {
  const { playerslist } = props;
  return (
    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        {playerslist.map((player, index) => (
          <CarouselItem index={index} player={player} />
        ))}
      </div>
      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span
        className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span
        className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
    </div>
  )
};

Carousel.propTypes = {
  playerslist: PropTypes.arrayOf(PropTypes.object),
};

export default Carousel;