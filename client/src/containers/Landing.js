import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { AllPlayersCall } from '../helpers/APIcalls';
import '../style/Landing.css';

class Landing extends React.Component {
  componentDidMount() {
    let token = document.querySelector('meta[name="csrf-token"]').content;
    const { getAllPlayers } = this.props;
    getAllPlayers(token);
  }

  render() { 
    const { coach } = this.props;
    const { playersList } = coach;
    return ( 
      <div className="col-md-10 col-sm-12 p-3">
        <div className="d-flex align-items-centerjustify-content-start text-success ml-2">
          <h3><u>HOME</u></h3>
        </div>
        <div className="text-center ">
          <h3 className="text-white bg-success w-50 m-auto rounded p-2 border border-dark d-flex justify-content-around">
            Select Your Coach<small className="mt-2"><i className="fas fa-chevron-down"></i></small></h3>
          <span className="tex-mute text-white-50">Select over top-className professional players</span>
        </div>
        <div className="jumbotron bg-success p-4 mt-5">
          <Carousel key={playersList} playerslist={playersList} />
        </div>
      </div>
    );
  }
}

Landing.propTypes = {  
  coach: PropTypes.shape({
    error: PropTypes.object,
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




<Link
              key={player.id}
              to={{
                pathname: `/coach/${player.id}`,
                state: {
                  playerId: player.id,
                },
              }}
              classNameName="btn btn-secondary"
              >
                Go to Coach Profile
              </Link>   