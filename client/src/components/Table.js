import React from 'react';
import PropTypes from 'prop-types';
import '../style/Table.css';

const Table = props => {
  const { player } = props;
  return (
    <div className="my-sm-2 mt-3 bg-light border border-dark">
      <div className=" text-right pr-2 black m-0 pt-1">
        <h4 className="text-right mb-0 mt-3 text-success">Coach Info</h4>
        <small className="text-right text-muted">Everything you need to know</small>
      </div>
      <table className="table table-hover table-bordered table-striped mb-0">
        <tbody>
          <tr className="as">
            <th className="text-center bg-success"><i className="far fa-clock"></i></th>
            <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> D.O.B:</p> <p className="m-0 text-dark">{player.born}</p></th>
          </tr>
          <tr className="as">
            <th className="text-center bg-success"><i className="fas fa-globe-europe"></i></th>
            <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> Nationality:</p> <p className="m-0 text-dark">{player.nationality}</p></th>
          </tr>
          <tr className="as">
            <th className="text-center bg-success"><i className="far fa-star"></i></th>
            <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> Turned Pro:</p> <p className="m-0 text-dark">{player.firstseason}</p></th>
          </tr>
          <tr className="as">
            <th className="text-center bg-success"><i className="fas fa-trophy"></i></th>
            <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark"> Ranking:</p> <p className="m-0 text-dark">{player.ranking}</p></th>
          </tr>
          <tr className="as">
            <th className="text-center bg-success"><i className="fas fa-dollar-sign"></i></th>
            <th className="d-flex justify-content-between align-items-center"><p className="m-0 text-dark">   Rate:</p> <p className="m-0 text-dark">{player.rate}</p></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Table;