/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavBar.css';

const NavBar = () => (
  <div className="col-md-2 col-sm-12 h-100 p-3 mt-4">
    <div className="d-flex flex-column">
      <div className="text-center p-3 image">
        <img alt="snooker background" src="https://wst.tv/wp-content/uploads/2015/06/WS-logo.jpg" />
      </div>
      <div className="list-group" id="list-tab" role="tablist">
        <Link
          to="/"
          className="list-group-item list-group-item-action active list-group-item-success"
          id="list-home-list"
          data-toggle="list"
          role="tab"
          aria-controls="home"
        >
          HOME
        </Link>
        <Link
          to="/user/trainings"
          className="list-group-item list-group-item-action list-group-item-success"
          id="list-profile-list"
          data-toggle="list"
          role="tab"
          aria-controls="profile"
        >
          PROFILE
        </Link>

        <a
          className="list-group-item list-group-item-action list-group-item-success"
          id="list-shop-list"
          data-toggle="list"
          role="tab"
          aria-controls="shop"
        >
          SHOP
        </a>

        <Link
          to="/about"
          className="list-group-item list-group-item-action list-group-item-success"
          id="list-about-list"
          data-toggle="list"
          role="tab"
          aria-controls="about"
        >
          ABOUT
        </Link>
      </div>
    </div>
  </div>
);

export default NavBar;
