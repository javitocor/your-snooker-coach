import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-bootstrap/Spinner';
import Table from '../components/Table';
import Donut from '../components/Donut';
import Modal from '../components/Modal';
import CoachCard from '../components/CoachCard';
import { PlayerCall, CreateTrainingsCall } from '../helpers/APIcalls';

class ProfileCoach extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const { playerId } = location.state;
    const { getPlayer } = this.props;
    getPlayer(playerId);
  }

  addTraining(data) {
    const { postTraining } = this.props;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    postTraining(token, data);
  }

  render() {
    const { coach } = this.props;
    const { player } = coach;
    return player.length === 0 ? <div className="d-flex justify-content-center"><Spinner animation="grow" /></div> : (
      <div className="col-md-10 col-sm-12 p-3 content">

        <div className="row mt-3">
          <div className="col-md-8 col-12">

            <CoachCard player={player} />

          </div>
          <div className="col-md-4 col-sm-12 d-flex flex-column">
            <Table key={player} player={player} />
            <Donut />
            <Modal player={player} addTraining={this.addTraining} />            
          </div>
        </div>
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
  postTraining: PropTypes.func.isRequired,
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
  postTraining: CreateTrainingsCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCoach);