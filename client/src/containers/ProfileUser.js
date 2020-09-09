import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TrainingsCall } from '../helpers/APIcalls';
import Spinner from 'react-bootstrap/Spinner';
import '../style/ProfileUser.css';

const ProfileUser = ({ getTrainings, userTrainings }) => {
  const { error, pending, trainings } = userTrainings;

  useEffect(() => {
    getTrainings();
  }, []);

  if (error) {
    return (
      <div className="d-flex justify-content-center">{error}</div>
    );
  }
  if (pending) {
    return (
      <div className="d-flex justify-content-center align-items-center w-100">
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <div className="col-md-10 col-sm-12 p-3 mt-4 content main">
      <div className=" ml-2 mb-4">
        <h3 className="text-success title"><u>User Profile</u></h3>
      </div>
      <section id="team" className="pb-5">
        <div className="container">
          <h5 className="section-title h1 text-center text-success">YOUR TRAININGS</h5>
          <div className="row">
            {trainings.map((training, index) => (
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="image-flip">
                  <div className="mainflip flip-0">
                    <div className="frontside">
                      <div className="card">
                        <div className="card-body text-center">
                          <p><img className=" img-fluid"
                            src={training.player.image}
                            alt="card image" /></p>
                          <h4 className="card-title">Training {index + 1}</h4>
                          <p className="card-text">Location: {training.location}</p>
                          <p className="card-text">Date: {training.date}</p>
                          <p className="card-text">Coach: {training.player.name}</p>
                          <a href="#" className="btn btn-success btn-sm"><i
                            className="fa fa-plus"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="backside">
                      <div className="card">
                        <div className="card-body text-center mt-4">
                          <h4 className="card-title">Training Info</h4>
                          <p className="card-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="#">
                                <i className="fas fa-battery-full"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="#">
                                <i className="far fa-check-circle"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="#">
                                <i className="far fa-handshake"></i>
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a className="social-icon text-xs-center" target="_blank" href="#">
                                <i className="fas fa-calendar-day"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
};

ProfileUser.propTypes = {
  userTrainings: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    trainings: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getTrainings: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  userTrainings: {
    error: state.userTrainings.error,
    trainings: state.userTrainings.trainings,
    pending: state.userTrainings.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTrainings: TrainingsCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);