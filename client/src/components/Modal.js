import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    const { player } = this.props
    this.state = {
      location: '',
      date: '',
      player: player.id
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = e => {
    let newValue = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: newValue
    });
  }

  onSubmit(e) {
    const { addTraining, player } = this.props;
    let data = this.state;
    e.preventDefault();
    addTraining(data);
    this.setState({
      date: '',
      location: '',
      playerId: player.id,
    });
  }

  render() {
    const { player } = this.props;
    return (
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
                <form onSubmit={this.onSubmit} className="needs-validation" novalidate>
                  <div className="form-group row">
                    <label for="example-select" className="col-2 col-form-label">Location</label>
                    <div className="col-10">
                      <select multiple name="location" value={this.state.location} onChange={this.handleChange} className="custom-select bg-secondary" id="example-select">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label for="validationCustomt" className="col-2 col-form-label">Date</label>
                    <div className="col-10">
                      <input name="date" className="form-control bg-secondary" type="date" value={this.state.date} onChange={this.handleChange} id="validationCustom" />
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
    )
  }
};

Modal.propTypes = {
  player: PropTypes.object.isRequired,
  addTraining: PropTypes.func.isRequired,
};

export default Modal;