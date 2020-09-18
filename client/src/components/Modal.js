import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import $ from "jquery";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      date: '',
      player_id: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    window.$('#exampleModalCenter').modal('hide');
  }

  handleChange = e => {
    const { player } = this.props;
    const id = player.id;
    let newValue = e.target.value;
    let key = e.target.name;
    this.setState({
      [key]: newValue,
      player_id: id,
    });
  }

  onSubmit(e) {
    const { addTraining, player } = this.props;
    const id = player.id;
    this.setState({
      player_id: id,
    });
    
    let data = this.state;
    e.preventDefault();
    addTraining(data);
    this.setState({
      location: '',
      date: '',
      player_id: 0,
    })
  }

  render() {
    const { player } = this.props;
    return (
      <div className=" w-75 mx-auto my-3 text-center">

        <button type="button" className="btn btn-success p-3 bWidth" data-toggle="modal" data-target="#exampleModalCenter">
          Book a Training
      </button>

        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
          aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content bg-secondary">
              <div className="modal-header">
                <div className="d-flex flex-column text-left">
                  <h5 className="modal-title text-success font-weight-bold" id="exampleModalLongTitle">Book a training with {player.name}</h5>
                  <small className="text-left">Select Location and Date</small>
                </div>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit} className="needs-validation" noValidate>
                  <div className="form-group row">
                    <label htmlFor="example-select" className="col-2 col-form-label">Location</label>
                    <div className="col-10">
                      <Select location={this.state.location} handleChange={this.handleChange}/>                      
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="validationCustomt" className="col-2 col-form-label">Date</label>
                    <div className="col-10">
                      <input name="date" className="form-control" type="date" value={this.state.date} onChange={this.handleChange} id="validationCustom" />
                      <div className="valid-feedback">
                        Looks good!
                    </div>
                    </div>
                  </div>
                  <button className="btn btn-success bWidth" type="submit" onClick = {this.handleClose} >Confirm your training</button>
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
