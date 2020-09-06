import React from 'react';
import '../style/About.css';

const About = () => (
  <main className="col-md-10 col-sm-12 p-3 content mt-3">
    <div className="jumbotron content2 mt-4">
      <div className="container">
        <h1 className="display-3">Xin Chào, Snooker Lovers</h1>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.</p>
        <p><a className="btn btn-success btn-lg" href="#" role="button">Learn more »</a></p>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h2>Who We Are</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn btn-success" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4">
          <h2>What We Do</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn btn-success" href="#" role="button">View details »</a></p>
        </div>
        <div className="col-md-4">
          <h2>Contact Us</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-success" href="#" role="button">View details »</a></p>
        </div>
      </div>

      <hr />

    </div>

  </main>
);

export default About;