import React from 'react';
import PropTypes from 'prop-types';
import '../style/coachCard.css';

const CoachCard = props => {
  const { player } = props;
  return (
    <div>
              <div className=" ml-2 mb-4">
                <h3 className="text-success title"><u>Coach Profile</u></h3>
              </div>
              <figure className="snip1174 red">
                <img src={player.image} />
                <figcaption>
                  <h2>{player.name}</h2>
                  <p>
                    Professional Snooker Player
                  </p>
                  <div>{player.info}</div>
                </figcaption>
              </figure>
            </div>
  )
}

CoachCard.propTypes = {
  player: PropTypes.object.isRequired,
};

export default CoachCard;