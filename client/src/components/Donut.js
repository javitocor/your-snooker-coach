import React from 'react';
import '../style/Donut.css';

const Donut = () => {
  return (
    <div className="donut-chart-block block">
      <h2 className="titular text-success">Player Specs</h2>
      <div className="donut-chart">
        <div id="porcion1" className="recorte">
          <div className="quesito ment" data-rel="21"></div>
        </div>
        <div id="porcion2" className="recorte">
          <div className="quesito acc" data-rel="39"></div>
        </div>
        <div id="porcion3" className="recorte">
          <div className="quesito def" data-rel="31"></div>
        </div>
        <div id="porcionFin" className="recorte">
          <div className="quesito att" data-rel="9"></div>
        </div>
        <p className="center-date"><br /><span className="scnd-font-color"></span></p>
      </div>
      <div className="values">
        <ul className="os-percentages horizontal-list">
          <li>
            <p className="ment os scnd-font-color">Mental</p>
            <p className="os-percentage">21%</p>
          </li>
          <li>
            <p className="acc os scnd-font-color">Accuracy</p>
            <p className="os-percentage">39%</p>
          </li>
          <li>
            <p className="att os scnd-font-color">Attack</p>
            <p className="os-percentage">9%</p>
          </li>
          <li>
            <p className="def os scnd-font-color">Defense</p>
            <p className="os-percentage">31%</p>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default Donut;