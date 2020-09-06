import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {TrainingsCall} from '../helpers/APIcalls';
import Spinner from 'react-bootstrap/Spinner';

const ProfileUser = ({ getTrainings, userTrainings }) => {
  const { error, pending, trainings} = userTrainings;

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
    <div>
      {trainings.map(training =>{
        <ul>
          <li>{training.location}</li>
        </ul>
      })}
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
    error: state.trainings.error,
    trainings: state.trainings.trainings,
    pending: state.trainings.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTrainings: TrainingsCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);