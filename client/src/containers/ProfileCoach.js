import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { PlayerCall } from '../helpers/APIcalls';

class ProfileCoach extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const { playerId } = location.state;
    const { getPlayer } = this.props;
    getPlayer(playerId);
  }

  render() { 
    const { coach } = this.props; 
    console.log(coach.player);
    return ( 
      <div>
        <ul>
            <li>{coach.player.name}</li>
            <li>{coach.player.born}</li>
            <li>{coach.player.nationality}</li>
            <li>{coach.player.rate}</li>
            <li>{coach.player.ranking}</li>
            <li>{coach.player.firstseason}</li>
            <li>{coach.player.info}</li>
        </ul>
        <Link to="/user/trainings" className="btn btn-secondary mt-3">
            User Profile
          </Link>
      </div>     
    );
  }
}

ProfileCoach.propTypes = {  
  location: PropTypes.shape({
    state: PropTypes.shape({ playerId: PropTypes.number.isRequired }),
  }).isRequired,
  coach: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    player: PropTypes.object,
  }).isRequired,
  getPlayer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  coach: {
    error: state.coach.error,
    player: state.coach.player,
    pending: state.coach.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPlayer: PlayerCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCoach);