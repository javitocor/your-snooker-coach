import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import season from '../style/Seasons.module.css';
import showName from '../helpers/showName';
import callAPI from '../helpers/API';

const ProfileUser = ({ seasons, getSeasons, location }) => {

};

ProfileUser.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ show: PropTypes.string.isRequired }),
  }).isRequired,
  seasons: PropTypes.shape({
    error: PropTypes.string,
    pending: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  getSeasons: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  seasons: {
    error: state.seasons.error,
    data: state.seasons.data,
    pending: state.seasons.pending,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getSeasons: callAPI,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileUser);