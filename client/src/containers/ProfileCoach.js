import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Table from '../components/Table';
import Donut from '../components/Donut';
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
    const { player } = coach;    
    const { location } = this.props;
    const { playerId } = location.state;
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
            
            <div className=" w-75 mx-auto my-4 text-center">

              <button type="button" className="btn btn-success p-3 bWidth" data-toggle="modal" data-target="#exampleModalCenter">
                Book a Training
              </button>

              <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content bg-secondary">
                    <div className="modal-header">
                      <div className="d-flex flex-column text-left">
                        <h5 className="modal-title" id="exampleModalLongTitle">Book a training with {player.name}</h5>
                        <small className="text-left">Select Location and Date</small>
                      </div>

                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body bg-secondary">
                      <form className="needs-validation" novalidate>
                        <div className="form-group row">
                          <label for="example-select" className="col-2 col-form-label">Location</label>
                          <div className="col-10">
                            <select multiple className="custom-select bg-secondary" id="example-select">
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label for="validationCustomt" className="col-2 col-form-label">Date</label>
                          <div className="col-10">
                            <input className="form-control bg-secondary" type="date" value="2011-08-19" id="validationCustom" />
                            <div className="valid-feedback">
                              Looks good!
                              </div>
                          </div>
                        </div>
                        <button className="btn btn-success bWidth" type="submit">Confirm your training</button>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-success bWidth" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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