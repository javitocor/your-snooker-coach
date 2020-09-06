import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/CarouselItem.css';

const CarouselItem = props => {
  const {index, player} = props;
  return (
    <div key={index} className="carousel-item active">
            <div className="mask flex-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-12 order-md-1 order-2">
                    <h4>The Best Players <br/>
                      at One Click</h4>
                      <p>{player.name}</p>
                      <p>Profesional Since: {player.firstseason}</p>
                      <Link
                        key={player.id}
                        to={{
                          pathname: `/coach/${player.id}`,
                          state: {
                            playerId: player.id,
                          },
                        }}
                      >
                        Go to Profile
                        </Link>
                      </div>
                    <div className="col-md-5 col-12 order-md-2 order-1"><img className="mx-auto mt-4"
                      src={player.image} alt="Player image"/></div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

CarouselItem.propTypes = {
  player: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};


export default CarouselItem; 