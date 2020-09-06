import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TrainingsCall } from '../helpers/APIcalls';
import Spinner from 'react-bootstrap/Spinner';

const ProfileUser = ({ getTrainings, userTrainings }) => {
  console.log(userTrainings);
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
      <div className="d-flex justify-content-center">
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <section id="team" class="pb-5">
      <div class="container">
        <h5 class="section-title h1 text-center text-success">YOUR TRAININGS</h5>
        <div class="row">
          {trainings.map((training, index) => (
            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="image-flip">
                <div class="mainflip flip-0">
                  <div class="frontside">
                    <div class="card">
                      <div class="card-body text-center">
                        <p><img class=" img-fluid"
                          src={training.player_id.image}
                          alt="card image" /></p>
                        <h4 class="card-title">Training {index + 1}</h4>
                        <p class="card-text">Location: {training.location}</p>
                        <p class="card-text">Date: {training.date}</p>
                        <p class="card-text">Coach: {training.player_id.name}</p>
                        <a href="#" class="btn btn-success btn-sm"><i
                          class="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="backside">
                    <div class="card">
                      <div class="card-body text-center mt-4">
                        <h4 class="card-title">Training Info</h4>
                        <p class="card-text">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="#">
                              <i class="fas fa-battery-full"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="#">
                              <i class="far fa-check-circle"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="#">
                              <i class="far fa-handshake"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a class="social-icon text-xs-center" target="_blank" href="#">
                              <i class="fas fa-calendar-day"></i>
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
    error: state.trainings.error,
    trainings: state.trainings.trainings,
    pending: state.trainings.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTrainings: TrainingsCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);