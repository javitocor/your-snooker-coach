import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from '../components/Table';
import Donut from '../components/Donut';
import Modal from '../components/Modal';
import { PlayerCall } from '../helpers/APIcalls';

class ProfileCoach extends React.Component {
  componentDidMount() {
    const { location } = this.props;
    const { playerId } = location.state;
    const { getPlayer } = this.props;
    getPlayer(playerId);
  }

  addTrainning() {

  }

  render() {
    const { coach } = this.props;
    const { player } = coach;
    return (
      <div className="col-md-10 col-sm-12 p-3 content">

        <div className="row mt-3">
          <div className="col-md-8 col-12">

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

          </div>
          <div className="col-md-4 col-sm-12 d-flex flex-column">
            <Table key={player} player={player} />
            <Donut />
            <Modal player={player} addTrainning={this.addTrainning} />            
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