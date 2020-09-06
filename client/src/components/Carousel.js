import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/Carousel.css';

const Carousel = props => {
  const { playerslist } = props;
  return (
    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        {playerslist.map((player, index) => (
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
                      src="http://snooker.org/img/players/MarkWilliams.png" alt="Player image"/></div>
                    </div>
                  </div>
                </div>
              </div>
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