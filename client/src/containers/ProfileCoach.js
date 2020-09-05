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
            <div className="table-responsive my-sm-2 mt-3 bg-light border border-dark">
              <div className=" text-right pr-2 black m-0 pt-1">
                <h4 className="text-right mb-0 mt-3 text-success">Coach Info</h4>
                <small className="text-right text-muted">Everything you need to know</small>
              </div>
              <table className="table table-hover table-bordered table-striped mb-0">
                <tbody>
                  <tr className="">
                    <th className="text-center bg-success"><i className="far fa-clock"></i></th>
                    <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> D.O.B:</p> <p className="m-0 text-dark">{player.born}</p></th>
                  </tr>
                  <tr className="">
                    <th className="text-center bg-success"><i className="fas fa-globe-europe"></i></th>
                    <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> Nationality:</p> <p className="m-0 text-dark">{player.nationality}</p></th>
                  </tr>
                  <tr className="">
                    <th className="text-center bg-success"><i className="far fa-star"></i></th>
                    <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> Turned Pro:</p> <p className="m-0 text-dark">{player.firstseason}</p></th>
                  </tr>
                  <tr className="">
                    <th className="text-center bg-success"><i className="fas fa-trophy"></i></th>
                    <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> Ranking:</p> <p className="m-0 text-dark">{player.ranking}</p></th>
                  </tr>
                  <tr className="">
                    <th className="text-center bg-success"><i className="fas fa-dollar-sign"></i></th>
                    <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark">   Rate:</p> <p className="m-0 text-dark">{player.rate}</p></th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="donut-chart-block block">
              <h2 className="titular text-success">Player Specs</h2>
              <div className="donut-chart">
                <div id="porcion1" className="recorte">
                  <div className="quesito ios" data-rel="21"></div>
                </div>
                <div id="porcion2" className="recorte">
                  <div className="quesito mac" data-rel="39"></div>
                </div>
                <div id="porcion3" className="recorte">
                  <div className="quesito win" data-rel="31"></div>
                </div>
                <div id="porcionFin" className="recorte">
                  <div className="quesito linux" data-rel="9"></div>
                </div>
                <p className="center-date"><br /><span className="scnd-font-color"></span></p>
              </div>
              <div className="values">
                <ul className="os-percentages horizontal-list">
                  <li>
                    <p className="ios os scnd-font-color">Mental</p>
                    <p className="os-percentage">21%</p>
                  </li>
                  <li>
                    <p className="mac os scnd-font-color">Accuracy</p>
                    <p className="os-percentage">39%</p>
                  </li>
                  <li>
                    <p className="linux os scnd-font-color">Attack</p>
                    <p className="os-percentage">9%</p>
                  </li>
                  <li>
                    <p className="win os scnd-font-color">Defense</p>
                    <p className="os-percentage">31%</p>
                  </li>
                </ul>
              </div>
            </div>
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
                        <button className="btn btn-success bWidth" type="submit">Apply for training</button>
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