import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/Carousel.css';

const Carousel = props => {
  const { playerslist } = props;
  return (
    <div id="myCarousel" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        {playerslist.map(player => (
          <div class="carousel-item active">
            <div class="mask flex-center">
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-md-7 col-12 order-md-1 order-2">
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
                    <div class="col-md-5 col-12 order-md-2 order-1"><img class="mx-auto mt-4"
                      src="http://snooker.org/img/players/MarkWilliams.png" alt="Player image"/></div>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev"> <span
              class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next"> <span
              class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
          </div>
        )
};

Carousel.propTypes = {
          playerslist: PropTypes.object.isRequired,
};

export default Carousel;