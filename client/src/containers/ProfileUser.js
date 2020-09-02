import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrainingsCall from '../helpers/APIcalls';

const ProfileUser = ({ getTrainings, trainings }) => {
  const { error, pending, trainings} = trainings;

  useEffect(() => {
    getTrainings();
  }, []);

  if (error) {
    return (
      <div>{error}</div>
    );
  }
  if (pending) {
    return (
      <div className="">...Loading...</div>
    );
  }

  return (
};

ProfileUser.propTypes = {
  trainings: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    trainings: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getTrainings: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  trainings: {
    error: state.trainings.error,
    trainings: state.trainings.trainings,
    pending: state.trainings.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTrainings: TrainingsCall,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);