import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { AllPlayersCall } from '../helpers/APIcalls';

class Landing extends React.Component {
  componentDidMount() {
    let token = document.querySelector('meta[name="csrf-token"]').content;
    const { getAllPlayers } = this.props;
    getAllPlayers(token);
  }

  render() { 
    const { coach } = this.props;  
    console.log(coach);
    return ( 
      <div>
        <p>dfdfdfgfdgfdgfgfdgfgfd</p>
          {coach.playersList.map(player => {
            <ul>
              <li>{player.name}</li>
              <li><Link
              key={player.id}
              to={{
                pathname: `/coach/${player.id}`,
                state: {
                  playerId: player.id,
                },
              }}
              className="btn btn-secondary"
              >
                Go to Coach Profile
              </Link></li>
            </ul>
          })}
        
      </div>     
    );
  }
}

Landing.propTypes = {  
  coach: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    playersList: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getAllPlayers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  coach: {
    error: state.coach.error,
    playersList: state.coach.playersList,
    pending: state.coach.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllPlayers: AllPlayersCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landing);