import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Carousel = props => {
  const { playerslist } = props;
  return (
    <div id="carouselExampleIndicators" className="carousel slide border border-dark" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        {playerslist.map(player => (
          <div className="carousel-item">
            <img className="d-block w-100"
              src={player.image}
              alt="Player Image" />
            <div className="carousel-caption d-none d-md-block">
            <Link
              key={player.id}
              to={{
                pathname: `/coach/${player.id}`,
                state: {
                  playerId: player.id,
                },
              }}
            >
              <h4>{player.name}</h4>
              <p>Profesional Since: {player.firstseason}</p>
            </Link> 
            </div>
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
};

Carousel.propTypes = {
  playerslist: PropTypes.object.isRequired,
};

export default Carousel;